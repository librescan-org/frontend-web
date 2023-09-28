<script setup lang="ts">
import { AddressOverview, AddressType } from '~~/types/common'

interface TabAddressOverviewAndMoreInfoProps {
  addressOverview: AddressOverview | null
  addressType: AddressType | boolean
  tokenPrice: number | null
}
const props = defineProps<TabAddressOverviewAndMoreInfoProps>()

const { formatAddress, formatNumber, weiToToken, base64ToHex } = useUtils()
const token = useToken()
const classOverviewColLeft = ref<string>('col-span-12 sm:col-span-4 lg:col-span-3 max-sm:pb-0 p-3 sm:border-b sm:border-b-neutral-200')
const classOverviewColright = ref<string>('col-span-12 sm:col-span-8 lg:col-span-9 max-sm:pt-0 p-3 border-b border-b-neutral-200')

const balanceEth = computed(() => {
  if (props.addressOverview && props.addressOverview.walletstatistics) {
    return weiToToken(props.addressOverview.walletstatistics.weibalance)
  }
  return '0'
})

const valueEth = computed(() => {
  if (props.tokenPrice !== null) {
    return formatNumber(Number(balanceEth.value) * props.tokenPrice)
  }
  return 0
})
</script>

<template>
  <div v-if="addressOverview">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <BaseCard v-if="addressOverview.walletstatistics">
        <template #body>
          <div class="grid grid-cols-12 gap-0">
            <div class="col-span-12 border-b border-b-neutral-200">
              <span class="inline-block border-b-[2px] border-b-qan-blue-400 font-medium p-3 text-qan-blue-400">
                Overview
              </span>
            </div>

            <div :class="classOverviewColLeft">
              Balance:
            </div>
            <div :class="classOverviewColright">
              {{ balanceEth }} {{ token }}
            </div>

            <div :class="classOverviewColLeft">
              {{ token }} Value:
            </div>
            <div :class="classOverviewColright">
              <div v-if="tokenPrice" class="flex items-center flex-wrap">
                <span class="mr-1 break-all">${{ valueEth }}</span>
                <span class="text-qan-gray-900 text-xs mr-1">
                  {{ '(@ $' + tokenPrice + '/' + token + ')' }}
                </span>
                <BaseTooltip text="Coingecko value" extra-classes="w-[120px]">
                  <NuxtIcon name="circle-question-regular" class="text-qan-gray-900" />
                </BaseTooltip>
              </div>
            </div>

            <div :class="classOverviewColLeft">
              Token:
            </div>
            <div :class="classOverviewColright">
              <DropdownTokenHoldings :tokenholdings-list="addressOverview.walletstatistics.tokenholdingsList" />
            </div>
          </div>
        </template>
      </BaseCard>

      <BaseCard v-if="addressOverview.contractdata">
        <template #body>
          <div class="grid grid-cols-12 gap-0">
            <div class="col-span-12 border-b border-b-neutral-200">
              <span class="inline-block border-b-[2px] border-b-qan-blue-400 font-medium p-3 text-qan-blue-400">
                More Info
              </span>
            </div>

            <div :class="classOverviewColLeft">
              Contract Creator:
            </div>
            <div :class="classOverviewColright">
              <p class="flex flex-wrap items-center">
                <BaseTooltip :text="'Creator address\n' + addressOverview.contractdata.creatoraddress">
                  <NuxtLink :to="'/address/' + addressOverview.contractdata.creatoraddress" class="mr-1">
                    {{ formatAddress(addressOverview.contractdata.creatoraddress) }}
                  </NuxtLink>
                </BaseTooltip>
                <span class="mr-1"> at txn </span>
                <BaseTooltip text="Creator Txn Hash" extra-classes="w-[130px]" class="flex">
                  <NuxtLink :to="'/tx/' + addressOverview.contractdata.creatortransaction"
                    class="inline-block w-40 truncate">
                    {{ addressOverview.contractdata.creatortransaction }}
                  </NuxtLink>
                </BaseTooltip>
              </p>
            </div>

            <template v-if="addressOverview.tokenstatistics">
              <div :class="classOverviewColLeft">
                Token Tracker:
              </div>
              <div :class="classOverviewColright">
                <span class="mr-1">{{ addressOverview.tokenstatistics.name }}</span>
                <span>({{ addressOverview.tokenstatistics.symbol }})</span>
              </div>
            </template>
          </div>
        </template>
      </BaseCard>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-1 gap-6 mb-6">
      <BaseCard v-if="addressOverview.walletstatistics?.qanaddressdata">
        <template #body>
          <div class="grid grid-cols-12 gap-0">
            <div class="col-span-12 border-b border-b-neutral-200">
              <span class="inline-block border-b-[2px] border-b-qan-blue-400 font-medium p-3 text-qan-blue-400">
                QAN Address Data
              </span>
            </div>

            <div :class="classOverviewColLeft">
              <p>Version:</p>
            </div>
            <div :class="classOverviewColright">
              {{ addressOverview.walletstatistics?.qanaddressdata.version }}
            </div>

            <div :class="classOverviewColLeft">
              <p>Created:</p>
            </div>
            <div :class="classOverviewColright">
              <Timestamp :timestamp="addressOverview.walletstatistics?.qanaddressdata.created" />
            </div>

            <div :class="classOverviewColLeft">
              <p>Valid Until:</p>
            </div>
            <div :class="classOverviewColright">
              <Timestamp :timestamp="addressOverview.walletstatistics?.qanaddressdata.validuntil" />
            </div>

            <div :class="classOverviewColLeft">
              XLINK Address:
            </div>
            <div :class="classOverviewColright">
              <div class="flex flex-wrap items-center">
                <span>{{ base64ToHex(addressOverview.walletstatistics?.qanaddressdata.xlinkaddress) }}</span>
                <BaseCopyToClipboard :text="base64ToHex(addressOverview.walletstatistics?.qanaddressdata.xlinkaddress)" class="ml-1" />
              </div>
            </div>

            <div :class="classOverviewColLeft">
              Pem:
            </div>
            <div :class="classOverviewColright">
              <textarea
                class="h-[136px] bg-qan-gray-900/10 text-qan-gray-900 outline-none p-3 rounded w-full">{{ addressOverview.walletstatistics?.qanaddressdata.pem }}</textarea>
            </div>
          </div>
        </template>
      </BaseCard>
    </div>
  </div>
</template>
