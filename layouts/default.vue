<script setup lang="ts">
import { AppNav, AppFooter } from '#components'
</script>

<template>
  <div class="bg-[#FCFCFC]">
    <AppNav />
    <div class="h-fit">
      <slot />
    </div>
    <AppFooter />
  </div>
</template>
