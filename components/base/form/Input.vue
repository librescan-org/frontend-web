<script setup lang="ts">
import { FormInputType } from '~~/types/common'

interface FormInputProps {
  placeholder?: string
  type?: FormInputType
  modelValue: any
}

const props = withDefaults(defineProps<FormInputProps>(), {
  placeholder: '',
  type: FormInputType.Text,
})

const emit = defineEmits(['update:modelValue'])

const update = (e: any) => {
  emit('update:modelValue', e.target.value)
}
</script>

<template>
  <label class="w-full">
    <input
      :placeholder="props.placeholder"
      :value="props.modelValue"
      :type="props.type.toLowerCase()"
      @input="update"
      class="border border-neutral-200 rounded h-11 text-sm py-0 px-4 w-full placeholder:text-zinc-400 focus:outline-none"
    />
  </label>
</template>
