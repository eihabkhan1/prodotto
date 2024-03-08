<script setup lang="ts"></script>

<template>
  <div
    class="flex flex-col gap-4 bg-white border border-gray-100 p-4 rounded-lg shadow-sm basis-2/3"
  >
    <p class="text-xl">Output</p>
    <!-- Editor -->
    <div class="flex-1 bg-gray-50"></div>
    <!-- Actions -->
    <div class="flex justify-end items-center gap-4">
      <SecondaryButton> Copy to Clipboard </SecondaryButton>
      <PrimaryButton> Save to Store </PrimaryButton>
    </div>
  </div>
</template>
