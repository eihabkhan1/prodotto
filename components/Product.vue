<script setup lang="ts">
import { SecondaryButton } from '@youcan/ui-vue3'
import type { ProductProps } from './types'

withDefaults(defineProps<ProductProps>(), {
  title: 'Product title',
  inventroy: 0,
  price: '0.00',
  visible: false,
  ctaLabel: 'Generate',
  id: '1',
})

const imageError = ref(false)

function handleImageError() {
  imageError.value = true
}
</script>

<template>
  <div class="flex gap-4 bg-white p-4 rounded-lg">
    <!-- Left -->
    <picture
      class="bg-gray-200 flex justify-center items-center w-[120px] h-[120px] border-gray-100 rounded-lg overflow-hidden"
    >
      <img
        v-if="imageError && !imageError"
        :src="imageUrl"
        alt=""
        class="object-cover"
        height="120"
        width="120"
        @error="handleImageError"
      />
      <img
        v-else
        src="/assets/icons/camera.svg"
        width="40"
        height="40"
        alt="Camera"
      />
    </picture>

    <!-- Right -->
    <div class="flex flex-col gap-2 flex-1">
      <div class="flex justify-between items-center">
        <!-- Header -->
        <p class="font-bold">{{ title }}</p>
        <span
          class="bg-green-100 text-green-600 px-2 rounded-md"
          v-if="visible"
        >
          Visible
        </span>
        <span v-else class="bg-gray-100 text-gray-600 px-2 rounded-md">
          Hidden
        </span>
      </div>
      <!-- Details -->
      <div class="flex items-end h-full">
        <!-- Details -->
        <div class="flex flex-col gap-2 flex-1 h-full">
          <!-- Description -->
          <p class="line-clamp-1 text-sm text-gray-500">
            {{ description }}
          </p>
          <!-- Inventory -->
          <p class="text-sm text-gray-500">{{ inventory }} in stock</p>
          <!-- Price -->
          <p class="mt-auto">{{ price }}</p>
        </div>
        <!-- Action (Generate) -->
        <div class="ps-10">
          <NuxtLink :to="`/product/${id}`">
            <SecondaryButton iconPosition="right">
              <span class="font-medium">
                {{ ctaLabel }}
              </span>
              <template #icon> 🪄 </template>
            </SecondaryButton>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
