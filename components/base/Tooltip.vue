<script setup lang="ts">
import { TooltipAlign } from '~~/types/common'

interface TooltipProps {
  text?: string
  extraClasses?: string
  tooltipAlign?: TooltipAlign
}

const props = withDefaults(defineProps<TooltipProps>(), {
  text: '',
  extraClasses: '',
  tooltipAlign: TooltipAlign.Center
})
</script>

<template>
  <span class="group relative">
    <slot />
    <span v-if="props.tooltipAlign === TooltipAlign.Center"
      class="absolute opacity-0 invisible transition pointer-events-none group-hover:opacity-100 group-hover:visible left-1/2 -top-2 -translate-x-1/2 -translate-y-full px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700 after:pointer-events-none"
      :class="extraClasses">
      {{ props.text }}
    </span>

    <span v-else-if="props.tooltipAlign === TooltipAlign.Left"
      class="absolute opacity-0 invisible transition pointer-events-none group-hover:opacity-100 group-hover:visible -left-6 -top-2 -translate-y-full px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm after:content-[''] after:absolute after:left-8 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700 after:pointer-events-none"
      :class="extraClasses">
      {{ props.text }}
    </span>
  </span>
</template>
