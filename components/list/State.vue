<script setup lang="ts">
import * as api_pb from '~~/proto/api_pb'
import { LabelType, TooltipAlign } from '~~/types/common'
import { BigNumber } from 'ethers'
import { formatEther } from 'ethers/lib/utils'

interface ListStateProps {
  state: api_pb.StateChange.AsObject
}
const props = defineProps<ListStateProps>()

const { formatAddress, weiToToken, base64ToHexZeroPad } = useUtils()
const token = useToken()

const balanceDiff = computed<BigNumber>(() => {
  const before = BigNumber.from(props.state.balancebefore)
  const after = BigNumber.from(props.state.balanceafter)
  const diff = after.sub(before)

  return diff
})

const storageOpen = ref<boolean>(false)
const toggleStorage = () => {
  storageOpen.value = !storageOpen.value
}
</script>

<template>
  <tr>
    <td class="w-[60px]">
      <BaseLabelDefault v-if="state.storagechangesList.length > 0" :type="LabelType.Secondary"
        class="w-[24px] h-[24px] p-0 flex items-center justify-center cursor-pointer" @click="toggleStorage">
        <NuxtIcon v-if="!storageOpen" name="chevron-down-solid" />
        <NuxtIcon v-else name="chevron-up-solid" />
      </BaseLabelDefault>
    </td>
    <td>
      <p>
        <BaseTooltip :text="props.state.address" :tooltip-align="TooltipAlign.Left" extra-classes="w-[350px] -left-3">
          <NuxtLink :to="'/address/' + props.state.address" class="truncate flex-1">
            {{ formatAddress(props.state.address) }}
          </NuxtLink>
        </BaseTooltip>
      </p>
    </td>
    <td>
      <div>
        <span class="mr-1">{{ weiToToken(state.balancebefore) }}</span>
        <span>{{ token }}</span>
      </div>
      <BaseLabelDefault v-if="props.state.noncebefore && props.state.noncebefore !== props.state.nonceafter"
        :type="LabelType.Secondary" class="mt-1 mr-2">
        <span class="text-qan-gray-900">Nonce:</span> {{ props.state.noncebefore }}
      </BaseLabelDefault>
    </td>
    <td>
      <div>
        <span class="mr-1">{{ weiToToken(state.balanceafter) }}</span>
        <span>{{ token }}</span>
      </div>
      <BaseLabelDefault v-if="props.state.noncebefore && props.state.noncebefore !== props.state.nonceafter"
        :type="LabelType.Secondary" class="mt-1 mr-2">
        <span class="text-qan-gray-900">Nonce:</span> {{ props.state.nonceafter }}
      </BaseLabelDefault>
    </td>
    <td>
      <div class="flex flex-wrap items-center">
        <span class="mr-1">
          <NuxtIcon v-if="balanceDiff.gt(BigNumber.from(0))" name="chevron-up-solid" />
          <NuxtIcon v-else-if="balanceDiff.lt(BigNumber.from(0))" name="chevron-down-solid" />
        </span>
        <span>
          {{ balanceDiff.gte(BigNumber.from(0)) ? formatEther(balanceDiff) : formatEther(balanceDiff).slice(1) }}
        </span>
      </div>
    </td>
  </tr>
  <tr v-if="state.storagechangesList.length > 0" :class="{ hidden: !storageOpen }">
    <td>&nbsp;</td>
    <td colspan="4">
      <p class="mb-3">Storage ({{ state.storagechangesList.length }})</p>
      <div v-for="(storage, i) in state.storagechangesList" :key="i" class="p-3 bg-qan-gray-900/10 rounded mb-3">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-2 text-right">
            <p class="mb-1">Storage Address:</p>
            <p class="h-[27px] flex items-center justify-end mb-1">Before:</p>
            <p class="h-[27px] flex items-center justify-end">After:</p>
          </div>
          <div class="col-span-10">
            <p class="mb-1">{{ base64ToHexZeroPad(storage.storageaddress) }}</p>
            <StorageDataConverter :value="storage.valuebefore" class="mb-1" />
            <StorageDataConverter :value="storage.valueafter" />
          </div>
        </div>
      </div>
    </td>
  </tr>
</template>
