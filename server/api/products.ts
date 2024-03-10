import { isAxiosError } from 'axios'
import storeClient from '~/lib/storeClient'

export default defineEventHandler(async (event) => {
  const { accessToken } = event.context.session

  try {
    const [meResponse, productsResponse] = await Promise.all([
      storeClient.get(`/me`, {
        headers: {
          Authorization: 'Bearer ' + accessToken,
        },
      }),
      storeClient.get('/products', {
        headers: {
          Authorization: 'Bearer ' + accessToken,
        },
      }),
    ])

    const currency = meResponse.data.currency.code
    const products = productsResponse.data.data

    return products.map((product: any) => ({
      id: product.id,
      name: product.name,
      description: product.meta.description,
      visibility: product.visibility,
      price: product.price,
      image: product.thumbnail,
      inventory: product.inventory,
      currency: currency,
    }))
  } catch (error) {
    if (isAxiosError(error))
      throw createError({
        statusCode: error.response?.status,
        statusText: error.response?.statusText,
      })
  }
})
