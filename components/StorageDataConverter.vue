<script setup lang="ts">
import { useUtils } from '~~/composables/use-utils'

interface StorageDataConverterProps {
  value: string | Uint8Array
}
const props = defineProps<StorageDataConverterProps>()
const { base64ToHexZeroPad, base64ToNumber, base64ToASCII, base64ToAddress } = useUtils()

const dataTypeValues = ref([
  {
    type: 'hex',
    value: base64ToHexZeroPad(props.value)
  },
  {
    type: 'number',
    value: base64ToNumber(props.value)
  },
  {
    type: 'text',
    value: base64ToASCII(props.value)
  },
  {
    type: 'address',
    value: base64ToAddress(props.value)
  }
])

const dataTypeOptions = ref([
  {
    label: 'Hex',
    value: 'hex'
  },
  {
    label: 'Number',
    value: 'number'
  },
  {
    label: 'Text',
    value: 'text'
  },
  {
    label: 'Address',
    value: 'address'
  }
])
const dataType = ref(dataTypeOptions.value[0])

const selectedValue = computed(() => dataTypeValues.value.find(dataTypeValue => dataTypeValue.type === dataType.value.value))
</script>

<template>
  <div class="flex items-center">
    <select v-model="dataType" class="bg-white border border-neutral-200 rounded mr-2 py-1 px-2">
      <option v-for="(option, i) in dataTypeOptions" :key="i" :value="option">{{ option.label }}</option>
    </select>
    <NuxtIcon name="arrow-right-solid" class="mr-2" />
    <p v-if="dataType.value === 'address'">
      <NuxtLink v-if="selectedValue?.value !== 'NOT AN ADDRESS'" :to="'/address/' + selectedValue?.value">
        {{ selectedValue?.value }}
      </NuxtLink>
      <span v-else>{{ selectedValue?.value }}</span>
    </p>
    <span v-else>{{ selectedValue?.value }}</span>
  </div>
</template>
