<script setup lang="ts">
import { SecondaryButton } from '@youcan/ui-vue3'
import type { ProductProps } from './types'

withDefaults(defineProps<ProductProps>(), {
  title: 'Product title',
  description: 'Product description',
  price: '0.00',
  status: 'visible',
  ctaLabel: 'Generate',
  id: '1',
})
</script>

<template>
  <div class="flex gap-4 bg-white p-4 rounded-lg">
    <!-- Left -->
    <picture
      class="bg-gray-200 flex justify-center items-center w-[120px] h-[120px] border-gray-100 rounded-lg overflow-hidden"
    >
      <img
        v-if="imageUrl"
        :src="imageUrl"
        alt=""
        class="object-cover"
        height="120"
        width="120"
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
        <span>{{ status }}</span>
      </div>
      <!-- Details -->
      <div class="flex items-end h-full">
        <!-- Details -->
        <div class="flex flex-col gap-2 flex-1 h-full">
          <!-- Description -->
          <p class="line-clamp-3 text-sm text-gray-500">
            {{ description }}
          </p>
          <!-- Price -->
          <p class="mt-auto">MAD 1.999,00</p>
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
