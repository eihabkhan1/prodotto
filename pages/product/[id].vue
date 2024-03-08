<script setup lang="ts">
import { MultiSwitch, TertiaryButton } from '@youcan/ui-vue3'
import type { SwitchButtonOption } from '@youcan/ui-vue3/types'
import MetaDescriptionForm from '~/components/MetaDescriptionForm.vue'

const OPTIONS: SwitchButtonOption[] = [
  {
    label: 'Description',
    value: 1,
    icon: '',
  },
  {
    label: 'Meta Description',
    value: 2,
    icon: '',
  },
]

const activeOption = ref<SwitchButtonOption>(OPTIONS[0])
</script>

<template>
  <div class="flex flex-col justify-start items-start px-10 mx-auto">
    <!-- Back -->
    <NuxtLink to="/" class="flex gap-2 justify-center items-center mb-4">
      <img src="/assets/icons/arrow-left.svg" alt="arrow" />
      <span>Back to products</span>
    </NuxtLink>
    <!-- Main -->
    <main class="flex gap-4 w-full h-[calc(100vh-240px)]">
      <!-- Controls -->
      <div
        class="flex flex-col basis-1/3 bg-white border border-gray-100 p-4 rounded-lg shadow-sm"
      >
        <MultiSwitch
          v-model:selected-option="activeOption"
          :options="OPTIONS"
        />
        <DescriptionForm v-if="activeOption.value === 1" />
        <MetaDescriptionForm v-if="activeOption.value === 2" />
        <PrimaryButton class="w-full mt-auto"> Generate </PrimaryButton>
      </div>
      <!-- Output -->
      <DescriptionOutput />
    </main>
  </div>
</template>
