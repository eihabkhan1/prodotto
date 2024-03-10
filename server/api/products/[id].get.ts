import { isAxiosError } from 'axios'
import storeClient from '~/lib/storeClient'

export default defineEventHandler(async (event) => {
  const productId = event.context.params?.id
  const { accessToken } = event.context.session

  try {
    const { data } = await storeClient.get(`/products/${productId}`, {
      headers: {
        Authorization: 'Bearer ' + accessToken,
      },
    })

    return {
      id: data.id,
      name: data.name,
      description: data.description,
      visibility: data.visibility,
      price: data.price,
      images: data.images,
    }
  } catch (error) {
    if (isAxiosError(error))
      throw createError({
        statusCode: error.response?.status,
        statusText: error.response?.statusText,
      })
  }
})
