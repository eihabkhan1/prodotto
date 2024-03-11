import { isAxiosError } from 'axios'
import storeClient from '~/lib/storeClient'

export default defineEventHandler(async (event) => {
  const { accessToken } = event.context.session
  const productId = event.context.params?.id
  const { name, description, has_variants, price } = await readBody(event)

  console.log('Bearer ' + accessToken)
  console.log(`/products/update/${productId}`)

  try {
    const res = await $fetch(
      `https://api.youcanshop.dev/products/update/${productId}`,
      {
        headers: {
          Authorization: 'Bearer ' + accessToken,
        },
        method: 'POST',
        body: {
          name: name,
          description: description,
          has_variants: has_variants ? 1 : 0,
          price: price,
        },
      }
    )

    console.log('success:', res)
  } catch (error) {
    console.log(error)
  }
})
