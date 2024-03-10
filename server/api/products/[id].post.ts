import { isAxiosError } from 'axios'
import storeClient from '~/lib/storeClient'

export default defineEventHandler(async (event) => {
  const { accessToken } = event.context.session
  const productId = event.context.params?.id
  const { name, description } = await readBody(event)

  try {
    const res = await storeClient.post(`/products/update/${productId}`, {
      headers: {
        Authorization: 'Bearer ' + accessToken,
      },
      body: {
        name: name,
        description: description,
      },
    })

    console.log('success:', res.data)
  } catch (error) {
    console.log(error)
  }
})
