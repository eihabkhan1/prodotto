export interface ProductProps {
  id?: string
  title?: string
  visible?: boolean
  inventory?: number
  description?: string
  price?: string
  imageUrl?: string
  ctaLabel?: string
}

export interface ProductPrompt {
  store: string
  product: string
  category: string
  price: string
  metaDesc: string
  language: string
}
