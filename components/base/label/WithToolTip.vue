<script setup lang="ts">
import { TooltipAlign } from '~/types/common'

interface LabelWithToolTipProps {
  toolTipText?: string
  title?: string
  icon?: string
  iconColor?: string
  extraClasses?: string
}

const props = withDefaults(defineProps<LabelWithToolTipProps>(), {
  toolTipText: '',
  title: '',
  icon: 'circle-question-regular',
  iconColor: 'text-qan-gray-900',
  extraClasses: 'w-[175px]'
})
</script>

<template>
  <span class="inline-flex items-center">
    <BaseTooltip :text="props.toolTipText" :extra-classes="extraClasses" :tooltip-align="TooltipAlign.Left">
      <NuxtIcon :name="props.icon" :class="iconColor" />
    </BaseTooltip>
    <span class="pl-1 pt-[1px] max-md:font-medium">{{ props.title }}</span>
  </span>
</template>
