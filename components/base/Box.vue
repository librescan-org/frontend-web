<script setup lang="ts">
import { BoxType } from '~~/types/common'

interface BoxProps {
  title: string
  type?: BoxType
}

const props = withDefaults(defineProps<BoxProps>(), {
  type: BoxType.Square
})

const classObject = computed(() => {
  return {
    'box-circle': props.type === BoxType.Circle,
    'box-square': props.type === BoxType.Square
  }
})
</script>

<template>
  <div class="box-component" :class="classObject">
    {{ props.title }}
  </div>
</template>
