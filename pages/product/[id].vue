<script setup lang="ts">
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import { Loading } from '@youcan/ui-vue3'
import { ToastContainer } from '@youcan/ui-vue3'
import { toast } from '@youcan/ui-vue3/helpers'
import type { ToastOptions } from '@youcan/ui-vue3/types'

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
const isGenerating = ref(false)
const isSaving = ref(false)

async function generateDescription() {
  // Send data to the server through a separate POST request
  isGenerating.value = true
  description.value = ''
  const desc = await $fetch(`/api/generate/`, {
    method: 'POST',
    body: JSON.stringify({
      store: product.store,
      product: product.name,
      category: product.category.join(', '),
      price: formatCurrency(product.price, product.currency, 'en-MA'),
      promtDetails: promptDetails.value,
      language: outputLanguage.value.value,
    }),
  })

  description.value = desc
  isGenerating.value = false
}

function copyToClipboard() {
  navigator.clipboard.writeText(description.value)
}

async function saveToStore() {
  isSaving.value = true

  try {
    const res = await qantra.fetch(`/api/products/${productId}`, {
      method: 'POST',
      body: {
        name: title.value,
        description: description.value,
        has_variants: product.has_variants,
        price: product.price,
      },
    })
    if (res?.status?.value === 'success') {
      const toastOptions: ToastOptions = {
        title: 'Description Saved',
        description: 'New description has been saved to store',
        type: 'success',
      }
      toast.show(toastOptions)
    }
  } catch (error) {
    console.error(error)

    const toastOptions: ToastOptions = {
      title: 'Save failed',
      description: "We couldn't save the description, please try again.",
      type: 'error',
    }
    toast.show(toastOptions)
  } finally {
    isSaving.value = false
  }
}
</script>

<template>
  <ToastContainer :limit="3" />
  <div class="flex flex-col justify-start items-start px-10 mx-auto">
    <!-- Back -->
    <NuxtLink to="/" class="flex gap-2 justify-center items-center mb-4">
      <img src="/assets/icons/arrow-left.svg" alt="arrow" />
      <span>Back to products</span>
    </NuxtLink>
    <!-- Main -->
    <main class="flex gap-4 w-full">
      <!-- Controls -->
      <div
        class="flex flex-col basis-1/3 bg-white border border-gray-100 p-4 rounded-lg shadow-sm"
      >
        <div class="py-4 flex flex-col gap-4">
          <InputGroup>
            <template #label> Title </template>
            <template #input>
              <Input
                disabled
                v-model="title"
                placeholder="e.g Apple MacBook Pro"
              />
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
        <PrimaryButton
          :disabled="isGenerating"
          class="w-full mt-auto"
          @click="generateDescription"
        >
          {{ isGenerating ? 'Generating...' : 'Generate' }}
        </PrimaryButton>
      </div>
      <!-- Output -->
      <div
        class="bg-white border border-gray-100 p-4 rounded-lg shadow-sm basis-2/3"
      >
        <div v-if="description" class="flex flex-col gap-4 h-full">
          <p class="text-xl">Output</p>
          <!-- Editor -->
          <div class="flex-1 bg-gray-50">
            <ClientOnly>
              <QuillEditor
                v-model:content="description"
                contentType="html"
                theme="snow"
                class="h-[320px]"
              />
            </ClientOnly>
          </div>
          <!-- Actions -->
          <div class="flex justify-end items-center gap-4">
            <SecondaryButton @click="copyToClipboard">
              Copy to Clipboard
            </SecondaryButton>
            <PrimaryButton :disabled="isSaving" @click="saveToStore">
              {{ isSaving ? 'Saving...' : 'Save to Store' }}
            </PrimaryButton>
          </div>
        </div>
        <div
          v-else-if="isGenerating"
          class="h-full flex flex-col gap-4 justify-center items-center"
        >
          <Loading :duration="15000" />
          <div
            class="flex flex-col gap-1 text-gray-400 justify-center items-center"
          >
            <p>Generating description, this might take some time.</p>
            <span>Please wait...</span>
          </div>
        </div>
        <div v-else class="h-full flex justify-center items-center">
          <p class="text-gray-400">
            Click on the "Generate" button to start generating description for
            {{ product.name }}
          </p>
        </div>
      </div>
    </main>
  </div>
</template>
