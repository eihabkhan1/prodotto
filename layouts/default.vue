<script setup lang="ts">
import { AppNav, AppFooter } from '#components'
</script>

<template>
  <div class="bg-[#FCFCFC]">
    <AppNav />
    <div class="h-[calc(100vh-160px)]">
      <slot />
    </div>
    <AppFooter />
  </div>
</template>
