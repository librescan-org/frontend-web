<script setup lang="ts">
import { ButtonStyle, ButtonTarget, ButtonType } from '~~/types/common'

interface ButtonDefaultProps {
  href?: string
  buttonStyle?: ButtonStyle
  type?: ButtonType
  target?: ButtonTarget
  disabled?: boolean
}

const props = withDefaults(defineProps<ButtonDefaultProps>(), {
  href: '',
  buttonStyle: ButtonStyle.Normal,
  type: ButtonType.Button,
  target: ButtonTarget.Self,
  disabled: false
})

const classObject = computed(() => {
  return {
    'button-sm': props.buttonStyle === ButtonStyle.Small,
    'button-disabled': props.disabled
  }
})
</script>

<template>
  <button v-if="props.type === ButtonType.Button" class="button" :class="classObject" :disabled="props.disabled">
    <slot />
  </button>
  <a v-else :href="props.href" :target="props.target" class="button" :class="classObject">
    <slot />
  </a>
</template>
