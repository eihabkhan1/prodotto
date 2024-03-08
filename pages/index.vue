<script setup lang="ts">
import { Product, ProductsSkeleton } from '#components'
</script>

<template>
  <main class="max-w-[1000px] mx-auto">
    <div class="flex flex-col gap-4">
      <h1 class="text-4xl font-bold">Your products</h1>
      <div
        class="border border-gray-200 rounded-lg h-[calc(100vh-220px)] overflow-y-scroll"
      >
        <!-- <ProductsSkeleton /> -->
        <ul class="flex flex-col gap-4 p-4 bg-[#F7F7F7]">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </ul>
      </div>
    </div>
  </main>
</template>
