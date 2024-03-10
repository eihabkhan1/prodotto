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
      New context: Generate clear and concise, and persuasive, descriptions for our ${product}, this ${product} is under the category/categories: ${category}, costing ${price}${
    metaDesc ? ` and described as ${metaDesc}` : ''
  }, description needs to be in ${language} language. Ensure cultural nuances are respected and the description resonates with native speakers.
  Response should be in HTML format and you should not have any explainations; I.E output directly, the output should start with a title (H1), description, and detailed list of features
  `
}
