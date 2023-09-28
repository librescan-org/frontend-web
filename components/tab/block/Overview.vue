<script setup lang="ts">
import * as api_pb from '~~/proto/api_pb'
import { ButtonStyle, GoToBlockDirection } from '~~/types/common'
import { ethers } from 'ethers'

interface TabBlockOverviewProps {
  block: api_pb.Block.AsObject
  maxBlockNumber: number
  minBlockNumber: number
}

const props = defineProps<TabBlockOverviewProps>()
const { base64ToHex, formatStringWithCommas, gasUsedPercent, weiToToken, blockReward } = useUtils()
const token = useToken()
const router = useRouter()

const uncleReward = computed(() => {
  let sumReward = 0
  props.block.unclesList.forEach((uncle) => {
    sumReward += Number(uncle.reward)
  })

  return sumReward.toString()
})

const goToBlock = (blockNumber: number, direction: GoToBlockDirection) => {
  let newBlockNumber
  if (direction === GoToBlockDirection.Next) {
    newBlockNumber = blockNumber + 1
  } else {
    newBlockNumber = blockNumber - 1
  }

  router.push('/block/' + newBlockNumber)
}
</script>

<template>
  <div>
    <BaseCard class="mb-4 py-1">
      <template #body>
        <div class="grid grid-cols-12 gap-0 mx-3">
          <div class="col-main-left">
            <BaseLabelWithToolTip title="Block Height:"
              tool-tip-text="Also known as Block Number. The block height, which indicates the length of the blockchain, increases after the addition of the new block." />
          </div>
          <div class="col-main-right">
            <div class="flex items-center">
              <span class="mr-1">{{ props.block.number }}</span>

              <BaseCopyToClipboard title="Block Height" :text="props.block.number.toString()" extra-classes="w-[130px]" />

              <BaseButtonDefault :button-style="ButtonStyle.Small" :disabled="minBlockNumber === block.number"
                class="mx-1 h-7 inline-flex items-center"
                @click.native="goToBlock(Number(props.block.number), GoToBlockDirection.Prev)">
                <NuxtIcon name="chevron-left-solid" />
              </BaseButtonDefault>

              <BaseButtonDefault :button-style="ButtonStyle.Small" :disabled="maxBlockNumber === block.number"
                class="h-7 inline-flex items-center"
                @click.native="goToBlock(Number(props.block.number), GoToBlockDirection.Next)">
                <NuxtIcon name="chevron-right-solid" />
              </BaseButtonDefault>
            </div>
          </div>

          <div class="col-main-left">
            <BaseLabelWithToolTip title="Timestamp:" tool-tip-text="The date and time at which a block is validated." />
          </div>
          <div class="col-main-right">
            <Timestamp :timestamp="props.block.timestamp" />
          </div>

          <div class="col-main-left">
            <BaseLabelWithToolTip title="Transactions:"
              :tool-tip-text="'The number of transactions in the block. Internal transaction is transactions as a result of contract execution that involves ' + token + ' value.'" />
          </div>
          <div class="col-main-right">
            <NuxtLink :to="'/txs?block=' + props.block.number" class="inline-block button button-sm">
              {{ props.block.transactioncount }} transactions
            </NuxtLink>
            <span> and </span>
            <NuxtLink v-if="block.tracecount > 0" :to="'/txsInternal?block=' + block.number"
              class="inline-block button button-sm">
              {{ block.tracecount }} contract internal transactions
            </NuxtLink>
            <span v-else> 0 contract internal transactions</span>
            <span> in this block</span>
          </div>

          <div class="col-main-left">
            <BaseLabelWithToolTip title="Block Reward:"
              :tool-tip-text="'For each block, the miner is rewarded with a finite amount of ' + token + ' on top of the fees paid for all transactions in the block.'" />
          </div>
          <div class="col-main-right">
            <span class="mr-1">
              {{ weiToToken(blockReward(props.block.staticreward, props.block.transactionfees,
                props.block.burntfees).toString()) }} {{ token }}
            </span>
            <span>(</span>
            <BaseTooltip text="Static Block Reward" extra-classes="w-[140px]">
              {{ weiToToken(props.block.staticreward) }}
            </BaseTooltip>
            <span>&nbsp;+&nbsp;</span>
            <BaseTooltip text="Transaction Fees" extra-classes="w-[120px]">
              {{ weiToToken(props.block.transactionfees) }}
            </BaseTooltip>
            <BaseTooltip v-if="props.block.burntfees" text="Burnt Fees" extra-classes="w-[80px]">
              - {{ weiToToken(props.block.burntfees) }}
            </BaseTooltip>
            <span>)</span>
          </div>

          <template v-if="block.unclesList.length > 0">
            <div class="col-main-left">
              <BaseLabelWithToolTip title="Uncles Reward:"
                :tool-tip-text="'An uncle block has a significantly lower reward than a normal block. Uncles reward is valid but rejected as it is not on the longest chain which is the working mechanism of the blockchain. Uncle block is important in Ethereum as it secures the blockchain.'" />
            </div>
            <div class="col-main-right">
              <span class="mr-1">{{ weiToToken(uncleReward) }} {{ token }}</span>
              <span>({{ props.block.unclesList.length }}&nbsp;</span>
              <span v-if="props.block.unclesList.length === 1">uncle at&nbsp;</span>
              <span v-else>uncles at&nbsp;</span>
              <template v-for="(uncle, i) in props.block.unclesList" :key="i">
                <NuxtLink :to="'/uncle/' + uncle.hash" class="text-qan-blue-400 transition hover:text-qan-blue-300">
                  Position {{ i }}</NuxtLink>
                <span v-if="i < props.block.unclesList.length - 1">,&nbsp;</span>
              </template>
              <span>)</span>
            </div>
          </template>

          <div class="col-span-12 bg-neutral-200 h-[1px] my-2" />

          <div class="col-main-left">
            <BaseLabelWithToolTip title="Difficulty:"
              tool-tip-text="The amount of effort required to mine a new block. The difficulty algorithm may adjust according to time." />
          </div>
          <div class="col-main-right">
            {{ formatStringWithCommas(props.block.difficulty) }}
          </div>

          <div class="col-main-left">
            <BaseLabelWithToolTip title="Total Difficulty:"
              tool-tip-text="Total difficulty of the chain until this block." />
          </div>
          <div class="col-main-right">
            {{ formatStringWithCommas(props.block.totaldifficulty) }}
          </div>

          <div class="col-main-left">
            <BaseLabelWithToolTip title="Size:"
              tool-tip-text="The block size is actually determined by the block's gas limit." />
          </div>
          <div class="col-main-right">
            {{ formatStringWithCommas(props.block.size) }} bytes
          </div>

          <div class="col-span-12 bg-neutral-200 h-[1px] my-2" />

          <div class="col-main-left">
            <BaseLabelWithToolTip title="Gas Used:"
              tool-tip-text="The total gas used in the block and its percentage of gas filled in the block." />
          </div>
          <div class="col-main-right">{{ formatStringWithCommas(props.block.gasused) }} ({{
            gasUsedPercent(props.block.gasused, props.block.gaslimit) }}%)</div>

          <div class="col-main-left">
            <BaseLabelWithToolTip title="Gas Limit:"
              tool-tip-text="Total gas limit provided by all transactions in the block." />
          </div>
          <div class="col-main-right">{{ formatStringWithCommas(props.block.gaslimit) }}</div>

          <template v-if="props.block.basefeepergas">
            <div class="col-main-left">
              <BaseLabelWithToolTip title="Base Fee Per Gas:"
                tool-tip-text="Post-London Upgrade, this represents the minimum gasUsed multiplier required for a tx to be included in a block." />
            </div>
            <div class="col-main-right">
              {{ weiToToken(props.block.basefeepergas.toString()) }} {{ token }}
            </div>
          </template>

          <template v-if="props.block.burntfees">
            <div class="col-main-left">
              <BaseLabelWithToolTip title="Burnt Fees:" tool-tip-text="Fees burnt by this block." />
            </div>
            <div class="col-main-right">
              {{ weiToToken(props.block.burntfees.toString()) }} {{ token }}
            </div>
          </template>

          <div class="col-main-left">
            <BaseLabelWithToolTip title="Extra Data:"
              tool-tip-text="Any data that can be included by the miner in the block." />
          </div>
          <div class="col-main-right">
            {{ base64ToHex(props.block.extradata) }}
          </div>
        </div>

      </template>
    </BaseCard>

    <BaseCard>
      <template #body>
        <BaseMoreLess>
          <div class="grid grid-cols-12 gap-0 mx-3">
            <div class="col-main-left">
              <BaseLabelWithToolTip title="Hash:" tool-tip-text="The hash of the block header of the current block." />
            </div>
            <div class="col-main-right">
              <span class="mr-1">{{ props.block.hash }}</span>
              <BaseCopyToClipboard title="Hash" :text="props.block.hash" extra-classes="w-[90px]" />
            </div>

            <div class="col-main-left">
              <BaseLabelWithToolTip title="Parent Hash:"
                tool-tip-text="The hash of the block from which this block was generated, also known as its parent block." />
            </div>
            <div class="col-main-right">
              <span class="mr-1">{{ props.block.parenthash }}</span>
              <BaseCopyToClipboard title="Parent Hash" :text="props.block.parenthash" extra-classes="w-[130px]" />
            </div>

            <div class="col-main-left">
              <BaseLabelWithToolTip title="Sha3Uncles:"
                tool-tip-text="The mechanism which Binance Javascript RLP encodes an empty string." />
            </div>
            <div class="col-main-right">
              <span class="mr-1">{{ props.block.sha3uncles }}</span>
              <BaseCopyToClipboard title="Sha3Uncles" :text="props.block.sha3uncles" extra-classes="w-[130px]" />
            </div>

            <div class="col-main-left">
              <BaseLabelWithToolTip title="Nonce:"
                tool-tip-text="Block nonce is a value used during mining to demonstrate proof of work for a block." />
            </div>
            <div class="col-main-right">
              <span class="mr-1">{{ ethers.utils.hexlify(ethers.BigNumber.from(props.block.nonce)) }}</span>
              <BaseCopyToClipboard title="Nonce" :text="props.block.nonce" extra-classes="w-[100px]" />     
            </div>
          </div>
        </BaseMoreLess>
      </template>
    </BaseCard>
  </div>
</template>
