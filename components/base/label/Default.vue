<script setup lang="ts">
import { LabelType } from '~/types/common'

interface LabelProps {
  type?: LabelType
  withIcon?: boolean
}

const props = withDefaults(defineProps<LabelProps>(), {
  type: LabelType.Primary,
  withIcon: false
})

const classObject = computed(() => {
  return {
    'label-primary': props.type === LabelType.Primary,
    'label-secondary': props.type === LabelType.Secondary,
    'label-success': props.type === LabelType.Success,
    'label-danger': props.type === LabelType.Danger,
    'label-warning': props.type === LabelType.Warning
  }
})
</script>

<template>
  <div class="label-component" :class="classObject">
    <template v-if="props.type === LabelType.Success">
      <NuxtIcon v-if="withIcon" name="circle-check-solid" class="mr-1" />
      <span>
        <slot />
      </span>
    </template>

    <template v-else-if="props.type === LabelType.Danger">
      <NuxtIcon v-if="withIcon" name="circle-xmark-solid" class="mr-1" />
      <span>
        <slot />
      </span>
    </template>

    <template v-else>
      <slot></slot>
    </template>
  </div>
</template>
