<script setup lang="ts">
interface AddressWithCopyProps {
  fromOrToAddress: string
  currentAddress?: string
}

const props = withDefaults(defineProps<AddressWithCopyProps>(), {
  fromOrToAddress: '',
  currentAddress: ''
})
const { formatAddress } = useUtils()
</script>

<template>
  <p class="flex items-center">
    <BaseTooltip v-if="props.fromOrToAddress !== props.currentAddress" :text="props.fromOrToAddress">
      <NuxtLink :to="'/address/' + props.fromOrToAddress">
        {{ formatAddress(props.fromOrToAddress) }}
      </NuxtLink>
    </BaseTooltip>
    <BaseTooltip v-else :text="props.fromOrToAddress">
      {{ formatAddress(props.fromOrToAddress) }}
    </BaseTooltip>
    <BaseCopyToClipboard title="Address" :text="props.fromOrToAddress" extra-classes="w-[100px]" class="ml-1" />
  </p>
</template>
