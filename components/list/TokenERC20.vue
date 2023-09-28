<script setup lang="ts">
import * as api_pb from '~~/proto/api_pb'

interface ListTokenERC20Props {
  currentAddress: string
  transfer: api_pb.erc20TokenTransfer.AsObject
}

const props = defineProps<ListTokenERC20Props>()
const { fromNow, getCurrentUTCDate, weiToToken } = useUtils()
</script>

<template>
  <tr>
    <td>
      <p>
        <NuxtLink :to="'/tx/' + props.transfer.transactionhash" class="block truncate w-40">
          {{ props.transfer.transactionhash }}
        </NuxtLink>
      </p>
    </td>
    <td>{{ props.transfer.method }}</td>
    <td>
      <BaseTooltip :text="getCurrentUTCDate(Number(props.transfer.blocktimestamp), true)" extra-classes="w-[140px]">
        {{ fromNow(Number(props.transfer.blocktimestamp)) }}
      </BaseTooltip>
    </td>
    <td>
      <AddressWithCopy :from-or-to-address="props.transfer.fromaddress" :current-address="props.currentAddress" />
    </td>
    <td>
      <TxDirection v-if="props.currentAddress" :from-address="props.transfer.fromaddress" :current-address="props.currentAddress" />
      <NuxtIcon v-else name="arrow-right-solid" />
    </td>
    <td>
      <AddressWithCopy :from-or-to-address="props.transfer.toaddress" :current-address="props.currentAddress" />
    </td>
    <td>
      {{ weiToToken(props.transfer.value, true) }}
    </td>
    <td class="w-[300px] word-break">
      <p>
        <NuxtLink :to="'/token/' + props.transfer.tokenaddress">
          {{ props.transfer.tokenname }} ({{ props.transfer.tokensymbol }})
        </NuxtLink>
      </p>
    </td>
  </tr>
</template>
