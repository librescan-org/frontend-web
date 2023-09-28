<script setup lang="ts">
interface TraceErrorProps {
  error: string | undefined
}
const props = defineProps<TraceErrorProps>()
</script>

<template>
  <BaseLabelWithToolTip v-if="props.error" :tool-tip-text="props.error" icon="circle-exclamation-solid"
    icon-color="text-red-600" extra-classes="w-[250px] left-[-8px] after:left-[15px]" />
  <NuxtIcon v-else name="circle-check-solid" class="mr-1 text-qan-green-400" />
</template>
