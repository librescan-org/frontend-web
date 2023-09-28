<script setup lang="ts">
import { useUtils } from '~~/composables/use-utils'

interface CopyToClipboardProps {
  text: string
  title: string
  extraClasses?: string
}

const props = withDefaults(defineProps<CopyToClipboardProps>(), {
  text: '',
  title: '',
  extraClasses: ''
})

const isWaiting = ref<boolean>(false)
const { copyToClipboard } = useUtils()
const tooltipText = computed(() => !isWaiting.value ? 'Copy ' + props.title : 'Copied!')

const onClickCopy = () => {
  copyToClipboard(props.text)

  isWaiting.value = true
  setTimeout(() => {
    isWaiting.value = false
  }, 1000)
}
</script>

<template>
  <span
    class="inline-flex items-center transition justify-center w-4 h-4 text-qan-gray-900 hover:text-qan-blue-400 cursor-pointer group relative"
    @click="onClickCopy">
    <BaseTooltip :text="tooltipText" :extra-classes="props.extraClasses">
      <span :class="{ hidden: isWaiting }">
        <NuxtIcon name="copy-solid" class="text-qan-gray-900/80" />
      </span>
      <span :class="{ hidden: !isWaiting }">
        <NuxtIcon name="check-solid" class="w-4 h-4 text-qan-gray-900/80" />
      </span>
    </BaseTooltip>
  </span>
</template>
