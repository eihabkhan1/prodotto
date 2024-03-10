import { ref, readonly } from 'vue'

type Chunk = {
  choices: {
    delta: {
      content: string
    }
  }[]
}

type ResolveStreamOptions = {
  data: ReturnType<typeof ref>
  onChunk: (arg: { data: string }) => void
  onReady: (arg: { data: string }) => void
  stream: ReadableStream
}

const resolveStream = async ({
  data,
  onChunk = () => {},
  onReady = () => {},
  stream,
}: ResolveStreamOptions) => {
  const reader = stream.pipeThrough(new TextDecoderStream()).getReader()
  while (true) {
    const { done, value } = await reader.read()
    if (done) break

    const chunks = value
      .replaceAll(/^data: /gm, '')
      .split('\n')
      .filter((c) => Boolean(c.length) && c !== '[DONE]')
      .map((c) => JSON.parse(c) as Chunk)

    for (let chunk of chunks) {
      const content = chunk.choices[0].delta.content
      if (!content) continue
      data.value += chunk.choices[0].delta.content
      onChunk({ data: content })
    }
  }
  // @ts-expect-error
  onReady({ data: data.value })
}

type UseChatStreamOptions = {
  onChunk?: (arg: { data: string }) => void
  onReady?: (arg: { data: string }) => void
  stream: ReadableStream
}

export const useChatStream = ({
  onChunk = () => {},
  onReady = () => {},
  stream,
}: UseChatStreamOptions) => {
  const data = ref('')

  resolveStream({
    data,
    onChunk,
    onReady,
    stream,
  })

  return {
    data: readonly(data),
  }
}
