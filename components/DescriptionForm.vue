<script setup lang="ts">
const title = ref('')
const promptDetails = ref('')
const languages = [
  { label: 'English', value: 1 },
  { label: 'Arabic', value: 2 },
  { label: 'French', value: 3 },
]
const outputLanguage = ref(languages[0])
</script>

<template>
  <div class="py-4 flex flex-col gap-4">
    <InputGroup>
      <template #label> Title </template>
      <template #input>
        <Input v-model="title" placeholder="e.g Apple MacBook Pro" />
      </template>
    </InputGroup>
    <InputGroup>
      <template #label> Additional product details (optional) </template>
      <template #input>
        <TextArea v-model="promptDetails" placeholder="Leave your comment" />
      </template>
      <template #info>
        The more info you provide on the product the accurate the description
        will be
      </template>
    </InputGroup>
    <InputGroup>
      <template #label> Description output language </template>
      <template #input>
        <Dropdown
          v-model="outputLanguage"
          searchable
          :items="languages"
          placeholder="Output Language"
        />
      </template>
    </InputGroup>
  </div>
</template>
