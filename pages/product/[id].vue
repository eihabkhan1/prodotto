<script setup lang="ts">
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

const route = useRoute()
const productId = route.params.id

const qantra = useQantra()
const res = await qantra.fetch(`/api/products/${productId}`)
const product = res.data.value

const languages = Array.from([
  'English',
  'Arabic',
  'French',
  'Italian',
  'German',
]).map((lang) => ({ label: lang, value: lang }))

const title = ref(product.name)
const promptDetails = ref('')
const description = ref(product.description)
const outputLanguage = ref(languages[0])

async function generateDescription() {
  const res = await qantra.fetch(`/api/generate/`, {
    method: 'POST',
    body: {
      store: product.store,
      product: product.name,
      category: product.category.join(', '),
      price: formatCurrency(product.price, product.currency, 'en-MA'),
      promtDetails: promptDetails.value,
      language: outputLanguage.value.value,
    },
  })
}
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
              <TextArea
                v-model="promptDetails"
                placeholder="Leave your comment"
              />
            </template>
            <template #info>
              The more info you provide on the product the accurate the
              description will be
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
        <PrimaryButton class="w-full mt-auto" @click="generateDescription">
          Generate
        </PrimaryButton>
      </div>
      <!-- Output -->
      <div
        class="flex flex-col gap-4 bg-white border border-gray-100 p-4 rounded-lg shadow-sm basis-2/3"
      >
        <p class="text-xl">Output</p>
        <!-- Editor -->
        <div class="flex-1 bg-gray-50">
          <ClientOnly>
            <QuillEditor
              v-model:content="description"
              contentType="html"
              theme="snow"
            />
          </ClientOnly>
        </div>
        <!-- Actions -->
        <div class="flex justify-end items-center gap-4">
          <SecondaryButton> Copy to Clipboard </SecondaryButton>
          <PrimaryButton> Save to Store </PrimaryButton>
        </div>
      </div>
    </main>
  </div>
</template>