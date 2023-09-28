<script setup lang="ts">
import * as api_pb from '~~/proto/api_pb'
import { ethers } from 'ethers'
import { useOnOutsidePress } from 'vue-composable'

interface DropdownTokenHoldingsProps {
  tokenholdingsList: api_pb.tokenHolding.AsObject[]
}
const props = defineProps<DropdownTokenHoldingsProps>()
const refDropdown = ref<any>(null)
const isOpen = ref<boolean>(false)
const { formatToken } = useUtils()

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

useOnOutsidePress(refDropdown, () => {
  isOpen.value = false
})
</script>

<template>
  <div class="dropdown--token-holdings" ref="refDropdown">
    <div class="dropdown-button" @click="toggleDropdown">
      <span>{{ tokenholdingsList.length }} Tokens</span>
      <NuxtIcon name="chevron-down-solid" />
    </div>
    <div class="dropdown-menu" :class="{ open: isOpen }">
      <BaseCard v-if="tokenholdingsList.length > 0" class="px-3 py-1 overflow-y-scroll max-h-[300px]">
        <template #body>
          <div v-for="(token, i) in tokenholdingsList" :key="i" class="grid grid-cols-12 gap-4 py-2"
            :class="i === tokenholdingsList.length - 1 ? '' : 'border-b border-b-neutral-300'">
            <div class="col-span-12">
              <NuxtLink :to="'/token/' + token.tokenaddress"
                class="block hover:bg-qan-gray-900/10 px-2 py-1 rounded transition">
                <span class="block">{{ token.name }} ({{ token.symbol }})</span>
                <span class="blokc text-xs text-qan-gray-900">
                  {{ formatToken(ethers.utils.formatUnits(token.value, token.decimals)) }} ({{ token.symbol }})
                </span>
              </NuxtLink>
            </div>
          </div>
        </template>
      </BaseCard>
    </div>
  </div>
</template>
