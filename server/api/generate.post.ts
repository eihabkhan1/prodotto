import { productDescriptionPrompt } from '~/lib/prompt'

export default defineEventHandler(async (event) => {
  const { store, product, category, price, promtDetails, language } =
    await readBody(event)

  const prompt = productDescriptionPrompt({
    category: category,
    language: language,
    metaDesc: promtDetails,
    price: price,
    product: product,
    store: store,
  })

  try {
    console.log('Generating')
    // Send prompt to lama
    const res = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama2',
        prompt: prompt,
        // prompt: 'Generate one random word',
        stream: false,
      }),
    })

    const data = await res.json()
    const generatedDescription = data.response

    console.log(generatedDescription)

    return generatedDescription
  } catch (error) {
    console.log(error)
  }
})
