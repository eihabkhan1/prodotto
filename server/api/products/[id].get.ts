import { isAxiosError } from 'axios'
import storeClient from '~/lib/storeClient'

export default defineEventHandler(async (event) => {
  const productId = event.context.params?.id
  const { accessToken } = event.context.session

  try {
    const [meResponse, productResponse] = await Promise.all([
      storeClient.get('/me', {
        headers: {
          Authorization: 'Bearer ' + accessToken,
        },
      }),
      storeClient.get(`/products/${productId}?include=categories`, {
        headers: {
          Authorization: 'Bearer ' + accessToken,
        },
      }),
    ])

    const me = meResponse.data
    const data = productResponse.data
    const categories = data.categories
      .filter((cat: any) => cat.show_on_collection)
      .map((cat: any) => cat.name)

    return {
      id: data.id,
      name: data.name,
      desc: data.description,
      visibility: data.visibility,
      price: data.price,
      images: data.images,
      store: me.domain,
      currency: me.currency.code,
      category: categories,
    }
  } catch (error) {
    if (isAxiosError(error))
      throw createError({
        statusCode: error.response?.status,
        statusText: error.response?.statusText,
      })
  }
})
