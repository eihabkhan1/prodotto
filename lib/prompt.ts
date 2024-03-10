export function productDescriptionPrompt(
  store: any,
  product: any,
  category: any,
  price: any,
  metaDesc: any,
  language: string
) {
  return `
      I am looking to revamp the product descriptions on my website ${store} to increase conversions. Generate clear and concise, and persuasive, descriptions for our ${product}, this ${product} is a ${category} costing ${price}${
    !metaDesc.isEmpty() ? ` and described as ${metaDesc}` : ''
  }, description needs to be in ${language} language. Ensure cultural nuances are respected and the description resonates with native speakers.

      Write a compelling product description for our ${category} named ${product} that costs ${price}${
    !metaDesc.isEmpty() ? ` and described as ${metaDesc}` : ''
  }, persuading the customer to make a purchase in ${language} language. Ensure cultural nuances are respected and the description resonates with native speakers.

      Generate a product description for our ${product} that not only highlights its unique features but also clearly differentiates it from competing products in the market. Here’s what makes it different, it's price ${price}, ${product} is a ${category}${
    !metaDesc.isEmpty() ? ` and is described as ${metaDesc}` : ''
  }, the description is in ${language} language. Ensure cultural nuances are respected and the description resonates with native speakers.

      Write a product description for our ${product} that accentuates its great value for money, showcasing its top-tier features without the premium price tag ${price}${
    !metaDesc.isEmpty() ? `, and it is described as ${metaDesc}` : ''
  }, the description is in ${language} language. Ensure cultural nuances are respected and the description resonates with native speakers.
  `
}
