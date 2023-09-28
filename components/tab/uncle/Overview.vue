<script setup lang="ts">
import * as api_pb from '~~/proto/api_pb'

interface TabUncleOverviewProps {
  uncle: api_pb.uncle.AsObject
}

const props = defineProps<TabUncleOverviewProps>()
const { formatStringWithCommas, fromNow, getCurrentUTCDate, weiToToken } = useUtils()
const token = useToken()
</script>

<template>
  <div>
    <BaseCard class="mb-4 py-1">
      <template #body>
        <div class="grid grid-cols-12 gap-0 mx-3">

          <div class="col-main-left">
            <BaseLabelWithToolTip title="Uncle Height:" tool-tip-text="The block height where the uncle block is found." />
          </div>
          <div class="col-main-right">
            <div class="flex items-center">
              <span>{{ props.uncle.number }}</span>
            </div>
          </div>

          <div class="col-main-left">
            <BaseLabelWithToolTip title="Block Height:" tool-tip-text="The block height where the uncle block is included." />
          </div>
          <div class="col-main-right">
            <div class="flex items-center">
              <p>
                <NuxtLink :to="'/block/' + props.uncle.nephewnumber">{{ props.uncle.nephewnumber }}</NuxtLink>
              </p>
            </div>
          </div>

          <div class="col-span-12 bg-neutral-200 h-[1px] my-2" />

          <div class="col-main-left">
            <BaseLabelWithToolTip title="Hash:" tool-tip-text="The hash of the block header of the current block." />
          </div>
          <div class="col-main-right">
            <div class="flex items-center">
              <span>{{ props.uncle.hash }}</span>
            </div>
          </div>

          <div class="col-main-left">
            <BaseLabelWithToolTip title="Parent Hash:" tool-tip-text="The hash of the block from which this block was generated, also known as its parent block." />
          </div>
          <div class="col-main-right">
            <div class="flex items-center">
              <span>{{ props.uncle.parenthash }}</span>
            </div>
          </div>

          <div class="col-main-left">
            <BaseLabelWithToolTip title="Mined by:" tool-tip-text="Miner who successfully include the block onto the blockchain." />
          </div>
          <div class="col-main-right">
            <div class="flex items-center">
              <AddressWithCopy :from-or-to-address="props.uncle.miner" />
            </div>
          </div>

          <div class="col-main-left">
            <BaseLabelWithToolTip title="Difficulty:" tool-tip-text="The amount of effort required to mine a new block. The difficulty algorithm may adjust according to time." />
          </div>
          <div class="col-main-right">
            <div class="flex items-center">
              <span>{{ formatStringWithCommas(props.uncle.difficulty) }}</span>
            </div>
          </div>

          <div class="col-span-12 bg-neutral-200 h-[1px] my-2" />

          <div class="col-main-left">
            <BaseLabelWithToolTip title="Gas Limit:" tool-tip-text="Total gas limit provided by all transactions in the block." />
          </div>
          <div class="col-main-right">
            <div class="flex items-center">
              <span>{{ formatStringWithCommas(props.uncle.gaslimit) }} Wei</span>
            </div>
          </div>

          <div class="col-main-left">
            <BaseLabelWithToolTip title="Gas Used:" tool-tip-text="The total gas used in the block of gas filled in the block." />
          </div>
          <div class="col-main-right">
            <div class="flex items-center">
              <span>{{ formatStringWithCommas(props.uncle.gasused) }} Wei</span>
            </div>
          </div>

          <div class="col-main-left">
            <BaseLabelWithToolTip title="Timestamp:" tool-tip-text="The date and time at which a block is mined." />
          </div>
          <div class="col-main-right">
            <div class="flex items-center">
              <span class="flex items-center">
                <NuxtIcon name="clock-regular" class="mr-1" />
                {{ fromNow(Number(props.uncle.timestamp)) }} ({{
                  getCurrentUTCDate(Number(props.uncle.timestamp)) }})
              </span>
            </div>
          </div>

          <div class="col-main-left">
            <BaseLabelWithToolTip title="Uncle Reward:" tool-tip-text="Uncle block gets a portion of the block reward for the effort put into mining." />
          </div>
          <div class="col-main-right">
            <div class="flex items-center">
              <span>{{ weiToToken(props.uncle.reward) }} {{ token }}</span>
            </div>
          </div>
        </div>
      </template>
    </BaseCard>
  </div>
</template>
