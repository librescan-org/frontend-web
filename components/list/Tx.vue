<script setup lang="ts">
import * as api_pb from '~~/proto/api_pb'
import { useUtils } from '~~/composables/use-utils'
import { useToken } from '~~/composables/states'
import { LabelType } from '~~/types/common'

interface ListTxProps {
  tx: api_pb.Transaction.AsObject
  currentAddress?: string
}
const props = withDefaults(defineProps<ListTxProps>(), {
  currentAddress: ''
})

const { fromNow, getCurrentUTCDate, weiToToken } = useUtils()
const token = useToken()
</script>

<template>
  <tr>
    <td>
      <p>
        <NuxtLink :to="'/tx/' + tx.hash" class="block truncate w-40">
          {{ tx.hash }}
        </NuxtLink>
      </p>
    </td>
    <td>
      <BaseLabelDefault :type="LabelType.Secondary" class="w-[95px] text-center truncate">
        {{ tx.method }}
      </BaseLabelDefault>
    </td>
    <td>
      <p>
        <NuxtLink :to="'/block/' + tx.blocknumber">{{ tx.blocknumber }}</NuxtLink>
      </p>
    </td>
    <td>
      <BaseTooltip :text="getCurrentUTCDate(Number(tx.blocktimestamp), true)" extra-classes="w-[140px]">
        {{ fromNow(Number(tx.blocktimestamp)) }}
      </BaseTooltip>
    </td>
    <td>
      <AddressWithCopy v-if="currentAddress" :from-or-to-address="tx.fromaddress" :current-address="currentAddress" />
      <AddressWithCopy v-else :from-or-to-address="tx.fromaddress" />
    </td>
    <td>
      <TxDirection v-if="currentAddress" :from-address="tx.fromaddress" :current-address="currentAddress" />
      <NuxtIcon v-else name="arrow-right-solid" />
    </td>
    <td>
      <AddressWithCopy v-if="currentAddress" :from-or-to-address="tx.toaddress" :class="currentAddress" />
      <AddressWithCopy v-else :from-or-to-address="tx.toaddress" />
    </td>
    <td>{{ weiToToken(tx.value, true) }} {{ token }}</td>
    <td><span class="text-xs text-qan-gray-900">{{ weiToToken(tx.transactionfee, true) }}</span></td>
  </tr>
</template>
