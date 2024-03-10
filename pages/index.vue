<script setup lang="ts">
import { Product } from '#components'

const qantra = useQantra()

const res = await useFetch('/api/products')
const products = res.data.value
</script>

<template>
  <main class="max-w-[700px] mx-auto">
    <div class="flex flex-col gap-4">
      <h1 class="text-4xl font-bold">Your products</h1>
      <div
        class="border border-gray-200 rounded-lg h-[calc(100vh-220px)] overflow-y-scroll"
      >
        <ProductsSkeleton v-if="products < 1" />
        <ul v-else class="flex flex-col gap-4 p-4 bg-[#F7F7F7]">
          <Product
            v-for="product in products"
            :key="product.id"
            :title="product.name"
            :description="product.description"
            :inventory="product.inventory"
            :price="formatCurrency(product.price, product.currency, 'en-MA')"
            :visible="product.visibility"
            :id="product.id"
            :imageUrl="product.image"
          />
        </ul>
      </div>
    </div>
  </main>
</template>
