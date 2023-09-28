<script setup lang="ts">
import { LabelType } from '~/types/common'

interface TxDirectionProps {
  fromAddress: string
  currentAddress: string
}

const props = defineProps<TxDirectionProps>()
</script>

<template>
  <BaseLabelDefault v-if="props.fromAddress !== currentAddress" :type="LabelType.Success" class="w-10 justify-center text-center px-0">
    IN
  </BaseLabelDefault>
  <BaseLabelDefault v-else :type="LabelType.Warning" class="w-10 justify-center text-center px-0">
    OUT
  </BaseLabelDefault>
</template>
