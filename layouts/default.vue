<script setup lang="ts">
import { AppNav, AppFooter } from '#components'
</script>

<template>
  <AppNav />
  <slot />
  <AppFooter />
</template>

<style>
html {
  background-color: white;
}
</style>
