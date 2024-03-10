import type { ProductPrompt } from '~/components/types'

export function productDescriptionPrompt({
  store,
  product,
  category,
  price,
  metaDesc,
  language,
}: ProductPrompt) {
  return `
      I am looking to revamp the product descriptions on my website ${store} to increase conversions. Generate clear and concise, and persuasive, descriptions for our ${product}, this ${product} is under the category/categories: ${category}, costing ${price}${
    metaDesc ? ` and described as ${metaDesc}` : ''
  }, description needs to be in ${language} language. Ensure cultural nuances are respected and the description resonates with native speakers.`
}
