<script setup lang="ts">
import { BigNumber } from 'ethers'
import { useUtils } from '~~/composables/use-utils'
import { BoxType, LabelType, ListItemType } from '~~/types/common'
import * as api_pb from '~~/proto/api_pb'
import { getContractAddress } from 'ethers/lib/utils'

interface ListItemProps {
  block?: api_pb.Block.AsObject | null
  tx?: api_pb.Transaction.AsObject | null
  blockDiff?: number
}

const props = withDefaults(defineProps<ListItemProps>(), {
  block: null,
  tx: null
})

const type = computed(() => {
  if (props.block !== null) {
    return ListItemType.Blocks
  } else if (props.tx !== null) {
    return ListItemType.Txs
  }
})

const { formatAddress, fromNow, weiToToken, blockReward } = useUtils()
const token = useToken()

const futureAddress = computed(() => {
  if (props.tx === null) {
    return ''
  }

  if (props.tx.toaddress === '') {
    return getContractAddress({
      from: props.tx.fromaddress,
      nonce: BigNumber.from(props.tx.nonce)
    })
  }
  return ''
})
</script>

<template>
  <div class="py-3 border-b border-b-neutral-200 last-of-type:border-none">
    <div class="grid grid-cols-12 gap-6 max-sm:gap-0">

      <template v-if="props.block && type === ListItemType.Blocks">
        <div class="col-span-4 max-sm:col-span-12">
          <div class="flex flex-wrap items-start">
            <BaseBox title="Bk" class="mr-2 max-sm:hidden" />

            <div class="flex-1 break-all pt-1 overflow-hidden max-sm:flex max-sm:flex-wrap">
              <p class="sm:hidden">Block&nbsp;</p>

              <p class="max-sm:w-1/3">
                <NuxtLink :to="'/block/' + props.block.number">
                  {{ props.block.number }}
                </NuxtLink>
              </p>

              <p class="text-xs text-qan-gray-900 max-sm:w-full">
                <span>{{ fromNow(Number(props.block.timestamp)) }}</span>
              </p>
            </div>
          </div>
        </div>

        <div class="col-span-8 max-sm:col-span-12">
          <div class="grid grid-cols-2 gap-6 max-sm:gap-4">
            <div class="break-all pt-1">
              <p class="flex flex-wrap">
                <span class="pr-1">Hash</span>
                <NuxtLink :to="'/block/' + props.block.hash" class="truncate flex-1">
                  {{ props.block.hash }}
                </NuxtLink>
              </p>
              <p>
                <BaseTooltip text="Transactions in this Block" extra-classes="w-[170px]">
                  <NuxtLink :to="'/txs?block=' + props.block.number">
                    {{ props.block.transactioncount }} txns
                  </NuxtLink>
                </BaseTooltip>
                <span v-if="blockDiff" class="text-xs text-qan-gray-900 ml-1">in {{ blockDiff }} secs</span>
              </p>
            </div>

            <div class="pt-2 text-right max-sm:flex max-sm:items-end max-sm:justify-end">
              <BaseTooltip text="Block Reward" extra-classes="w-[100px]">
                <BaseLabelDefault :type="LabelType.Secondary" class="text-[11px]">
                  <span class="flex items-start">
                    <span class="truncate pr-1">
                      {{ weiToToken(blockReward(props.block.staticreward, props.block.transactionfees,
                        props.block.burntfees).toString(), true) }}
                    </span>
                    <span>{{ token }}</span>
                  </span>
                </BaseLabelDefault>
              </BaseTooltip>
            </div>
          </div>
        </div>
      </template>

      <template v-else-if="props.tx && type === ListItemType.Txs">
        <div class="col-span-4 max-sm:col-span-12">
          <div class="flex flex-wrap items-start">
            <BaseBox title="Tx" :type="BoxType.Circle" class="mr-2 max-sm:hidden" />

            <div class="flex-1 break-all pt-1 overflow-hidden max-sm:flex max-sm:flex-wrap">
              <p class="sm:hidden">TX#&nbsp;</p>

              <p class="max-sm:w-1/3">
                <NuxtLink :to="'/tx/' + props.tx.hash" class="block truncate">
                  {{ props.tx.hash }}
                </NuxtLink>
              </p>

              <p class="text-xs text-qan-gray-900 max-sm:w-full">
                <span>{{ fromNow(Number(props.tx.blocktimestamp)) }}</span>
              </p>
            </div>
          </div>
        </div>

        <div class="col-start-6 col-span-7 max-sm:col-span-12 lg:max-xl:col-span-8">
          <div class="grid grid-cols-12 max-sm:gap-4 lg:max-xl:gap-0 gap-6">
            <div
              class="col-span-8 sm:col-span-8 lg:max-xl:col-span-9 xl:max-2xl:col-span-8 2xl:col-span-8 break-all pt-[2px] xl:pt-1">
              <p class="flex flex-wrap">
                <span class="pr-1">From</span>
                <BaseTooltip :text="props.tx.fromaddress" extra-classes="w-[350px]">
                  <NuxtLink :to="'/address/' + props.tx.fromaddress" class="truncate flex-1">
                    {{ formatAddress(props.tx.fromaddress) }}
                  </NuxtLink>
                </BaseTooltip>
              </p>
              <p class="flex flex-wrap">
                <template v-if="props.tx.toaddress !== ''">
                  <span class="pr-1">To</span>
                  <BaseTooltip :text="props.tx.toaddress" extra-classes="w-[350px]">
                    <NuxtLink :to="'/address/' + props.tx.toaddress" class="truncate flex-1">
                      {{ formatAddress(props.tx?.toaddress) }}
                    </NuxtLink>
                  </BaseTooltip>
                </template>

                <template v-else>
                  <BaseTooltip :text="futureAddress" extra-classes="w-[350px]">
                    <span>Created [</span>
                    <NuxtLink :to="'/address/' + futureAddress" class="truncate flex-1">
                      {{ formatAddress(futureAddress) }}
                    </NuxtLink>
                    <span>]</span>
                  </BaseTooltip>
                </template>
              </p>
            </div>

            <div
              class="col-span-4 sm:col-span-4 lg:max-xl:col-span-3 xl:max-2xl:col-span-4 2xl:col-span-4 pt-2 text-right max-sm:flex max-sm:items-end max-sm:justify-end">
              <BaseTooltip text="Amount" extra-classes="w-[65px]">
                <BaseLabelDefault :type="LabelType.Secondary" class="text-[11px]">
                  <span class="flex items-start">
                    <span v-if="props.tx.value" class="truncate pr-1">{{ weiToToken(props.tx.value, true) }}</span>
                    <span>{{ token }}</span>
                  </span>
                </BaseLabelDefault>
              </BaseTooltip>
            </div>
          </div>
        </div>
      </template>

    </div>
  </div>
</template>
