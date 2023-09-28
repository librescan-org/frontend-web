<script setup lang="ts">
import * as api_pb from '~~/proto/api_pb'

interface ListBlockProps {
  block: api_pb.Block.AsObject
}
const props = defineProps<ListBlockProps>()

const { formatStringWithCommas, fromNow, getCurrentUTCDate, gasUsedPercent, weiToToken, blockReward } = useUtils()
const token = useToken()
</script>

<template>
  <tr>
    <td>
      <p>
        <NuxtLink :to="'/block/' + props.block.number">{{ props.block.number }}</NuxtLink>
      </p>
    </td>

    <td>
      <BaseTooltip :text="getCurrentUTCDate(Number(props.block.timestamp), true)" extra-classes="w-[140px]">
        {{ fromNow(Number(props.block.timestamp)) }}
      </BaseTooltip>
    </td>

    <td>
      <p>
        <NuxtLink :to="'/txs?block=' + props.block.number">{{ props.block.transactioncount }}</NuxtLink>
      </p>
    </td>

    <td>
      <p>
        <NuxtLink :to="'/block/' + props.block.hash" class="block truncate w-40">
          {{ props.block.hash }}
        </NuxtLink>
      </p>
    </td>

    <td>
      {{ formatStringWithCommas(block.gasused) }}
      <span class="text-xs text-qan-gray-900">({{ gasUsedPercent(props.block.gasused, props.block.gaslimit) }}%)</span>
      <BaseProgress class="mt-1" :percent="Number(gasUsedPercent(props.block.gasused, props.block.gaslimit))" />
    </td>

    <td>
      {{ formatStringWithCommas(props.block.gaslimit) }}
    </td>

    <td>
      {{ weiToToken(blockReward(props.block.staticreward, props.block.transactionfees, props.block.burntfees).toString(),
        true) }} {{ token }}
    </td>
    <td>
      <p v-if="props.block.burntfees">
        {{ weiToToken(props.block.burntfees, true) }} {{ token }}
      </p>
    </td>
  </tr>
</template>
