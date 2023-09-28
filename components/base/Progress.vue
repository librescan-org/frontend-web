<script setup lang="ts">
interface ProgressProps {
  percent?: number
}

const props = withDefaults(defineProps<ProgressProps>(), {
  percent: 0
})

const widthPercent = computed(() => 'width: ' + props.percent + '%')
</script>

<template>
  <div class="bg-neutral-200 flex flex-wrap h-[2px] overflow-hidden">
    <div class="bg-qan-blue-400 w-0" :style="widthPercent" />
  </div>
</template>
