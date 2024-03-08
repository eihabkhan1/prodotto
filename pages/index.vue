<script setup lang="ts">
import { Product } from '#components'
</script>

<template>
  <main class="max-w-[1000px] mx-auto">
    <div class="flex flex-col gap-4">
      <h1 class="text-4xl font-bold">Your products</h1>
      <div
        class="border border-gray-200 p-4 bg-[#F7F7F7] rounded-lg h-[calc(100vh-220px)] overflow-y-scroll"
      >
        <ul class="flex flex-col gap-4">
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
