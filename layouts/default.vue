<script setup lang="ts">
import { AppNav, AppFooter } from '#components'
</script>

<template>
  <AppNav />
  <div class="h-[calc(100vh-180px)] bg-red-400">
    <slot />
  </div>
  <AppFooter />
</template>
