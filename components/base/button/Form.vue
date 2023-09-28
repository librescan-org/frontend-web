<script setup lang="ts">
interface ButtonFormProps {
  loading?: boolean
}

const props = withDefaults(defineProps<ButtonFormProps>(), {
  loading: false,
})

const isLoading = computed(() => {
  return {
    loading: props.loading
  }
})
</script>

<template>
  <button class="flex items-center justify-center rounded h-11 w-11 bg-qan-blue-400 transition hover:bg-qan-blue-300"
    :class="isLoading" :disabled="props.loading">
    <NuxtIcon v-if="!props.loading" name="magnifying-glass-solid" class="text-white" />
    <NuxtIcon v-else name="spinner-solid" class="text-white" />
  </button>
</template>
