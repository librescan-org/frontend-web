<script setup lang="ts">
import { AddressOverview } from '~~/types/common'
import { ethers } from 'ethers'

interface TabAddressOverviewAndMoreInfoProps {
  addressOverview: AddressOverview | null
  address: string
  tokenPrice: number | null
  tokenEthPrice: number | null
}
const props = defineProps<TabAddressOverviewAndMoreInfoProps>()

const { formatNumber, formatStringWithCommas, formatToken } = useUtils()
const token = useToken()

const classOverviewColLeft = ref<string>('col-span-12 sm:col-span-4 lg:col-span-3 max-sm:pb-0 p-3 sm:border-b sm:border-b-neutral-200')
const classOverviewColright = ref<string>('col-span-12 sm:col-span-8 lg:col-span-9 max-sm:pt-0 p-3 border-b border-b-neutral-200')

const fullyDilutedMarketCap = computed(() => {
  if (!props.tokenPrice) {
    return 0
  }
  if (!props.tokenEthPrice) {
    return 0
  }
  if (!props.addressOverview) {
    return 0
  }
  if (!props.addressOverview.tokenstatistics) {
    return 0
  }

  const maxTotalSupply = ethers.utils.formatUnits(props.addressOverview.tokenstatistics.maxtotalsupply, props.addressOverview.tokenstatistics.decimals)

  return Number(maxTotalSupply) * props.tokenPrice
})
</script>

<template>
  <div v-if="addressOverview?.tokenstatistics" class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
    <BaseCard>
      <template #body>
        <div class="grid grid-col-12 gap-0">
          <div class="col-span-12 border-b border-b-neutral-200">
            <span
              class="inline-block border-b-[2px] border-b-qan-blue-400 font-medium p-3 text-qan-blue-400">Overview</span>
          </div>

          <template v-if="tokenPrice && tokenEthPrice">
            <div :class="classOverviewColLeft"
              class="lg:col-span-6 relative mb-2 sm:mb-0 after:content-none lg:after:content-[''] after:absolute after:right-0 after:top-[10px] after:bottom-[10px] after:bg-neutral-200 after:w-px">
              <p class="text-xs text-qan-gray-900 uppercase">Price</p>
              <p class="flex flex-wrap items-center">
                <span class="mr-1">${{ formatNumber(tokenPrice) }}</span>
                <span class="text-xs text-qan-gray-900 mr-1">@ {{ tokenPrice / tokenEthPrice }} {{ token }}</span>
                <BaseTooltip text="Coingecko value" extra-classes="w-[120px]">
                  <NuxtIcon name="circle-question-regular" class="text-qan-gray-900" />
                </BaseTooltip>
              </p>
            </div>
            <div class="col-span-12 sm:col-span-8 lg:col-span-6 max-sm:pt-0 p-3 border-b border-b-neutral-200">
              <p class="text-xs text-qan-gray-900 uppercase">Fully Diluted Market Cap</p>
              <div class="flex flex-wrap items-center">
                <p class="mr-1">${{ formatNumber(fullyDilutedMarketCap) }}</p>
                <BaseTooltip text="Coingecko value" extra-classes="w-[120px]">
                  <NuxtIcon name="circle-question-regular" class="text-qan-gray-900" />
                </BaseTooltip>
              </div>
            </div>
          </template>

          <div :class="classOverviewColLeft">
            Max Total Supply:
          </div>
          <div :class="classOverviewColright">
            {{ formatToken(ethers.utils.formatUnits(addressOverview.tokenstatistics.maxtotalsupply,
              addressOverview.tokenstatistics.decimals)) }} {{ addressOverview.tokenstatistics.symbol }}
          </div>

          <div :class="classOverviewColLeft">
            Holders:
          </div>
          <div :class="classOverviewColright">
            {{ formatStringWithCommas(addressOverview.tokenstatistics.holders) }}
          </div>

          <div :class="classOverviewColLeft">
            Transfers:
          </div>
          <div :class="classOverviewColright">
            {{ formatStringWithCommas(addressOverview.tokenstatistics.totaltransfers) }}
          </div>
        </div>
      </template>
    </BaseCard>

    <BaseCard v-if="addressOverview.tokenstatistics">
      <template #body>
        <div class="grid grid-col-12 gap-0">
          <div class="col-span-12 border-b border-b-neutral-200">
            <span class="inline-block border-b-[2px] border-b-qan-blue-400 font-medium p-3 text-qan-blue-400">
              Profile Summary
            </span>
          </div>

          <div :class="classOverviewColLeft" class="grid items-center">
            <div :class="{ 'sm:min-h-[36px]': tokenPrice && tokenEthPrice }">
              Contract:
            </div>
          </div>
          <div :class="classOverviewColright" class="grid items-center">
            <div :class="{ 'sm:min-h-[36px]': tokenPrice && tokenEthPrice }">
              <p>
                <NuxtLink :to="'/address/' + addressOverview.tokenstatistics.tokenaddress" class="break-all">
                  {{ addressOverview.tokenstatistics.tokenaddress }}
                </NuxtLink>
              </p>
            </div>
          </div>

          <div :class="classOverviewColLeft">
            Decimals:
          </div>
          <div :class="classOverviewColright">
            {{ addressOverview.tokenstatistics.decimals }}
          </div>

          <!--
          <div :class="classOverviewColLeft">
            Official Site:
          </div>
          <div :class="classOverviewColright">
            <p><a href="" target="_blank"></a></p>
          </div>

          <div :class="classOverviewColLeft">
            Social Profiles:
          </div>
          <div :class="classOverviewColright">
            <div class="flex items-center">
              <p class="mr-2"><a href=""></a></p>
              <p class="mr-0"><a href=""></a></p>
            </div>
          </div>
          -->
        </div>
      </template>
    </BaseCard>
  </div>
</template>
