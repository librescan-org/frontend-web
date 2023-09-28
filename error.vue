<script setup lang="ts">
const props = defineProps({ error: Object })
const handleError = () => clearError({ redirect: '/' })

const classH1 = computed(() => {
  return {
    'text-amber-600': props.error?.statusCode == 404,
    'text-red-600': props.error?.statusCode == 500
  }
})
</script>

<template>
  <div class="min-h-screen relative">
    <AppHeaderError />
    <main>
      <section>
        <div class="container">
          <h1 class="flex items-center mb-1 text-2xl" :class="classH1">
            <NuxtIcon name="circle-exclamation-solid" class="mr-2" />Error {{ error?.statusCode }}
          </h1>
          <p class="text-base">{{ error?.message }}</p>
          <BaseButtonDefault class="mt-8" @click="handleError">Go back home</BaseButtonDefault>
        </div>
      </section>
    </main>
    <AppFooter :error-page="true" />
  </div>
</template>
