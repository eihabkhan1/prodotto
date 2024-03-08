<script setup lang="ts">
import { PrimaryButton } from '@youcan/ui-vue3'

function handleClick() {
  window.parent.location =
    'https://seller-area.youcanshop.dev/admin/products/create?approved=1'
}
</script>

<template>
  <img src="/assets/illustrations/cat-in-a-box.png" alt="Meow meow" />
  <div class="flex flex-col justify-center items-center gap-4">
    <h2 class="text-2xl font-semibold text-gray-400">
      Oops! You don’t have any products.
    </h2>
    <PrimaryButton @click="handleClick"> Create Product </PrimaryButton>
  </div>
</template>
