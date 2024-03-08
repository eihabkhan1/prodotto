<script setup lang="ts">
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
</script>

<template>
  <div
    class="flex flex-col gap-4 bg-white border border-gray-100 p-4 rounded-lg shadow-sm basis-2/3"
  >
    <p class="text-xl">Output</p>
    <!-- Editor -->
    <div class="flex-1 bg-gray-50">
      <ClientOnly>
        <QuillEditor theme="snow" />
      </ClientOnly>
    </div>
    <!-- Actions -->
    <div class="flex justify-end items-center gap-4">
      <SecondaryButton> Copy to Clipboard </SecondaryButton>
      <PrimaryButton> Save to Store </PrimaryButton>
    </div>
  </div>
</template>
