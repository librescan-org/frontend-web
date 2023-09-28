<script setup lang="ts">
import * as api_pb from '~~/proto/api_pb'

interface ListInternalTxnsProps {
  traces: api_pb.Trace.AsObject[]
}

const props = defineProps<ListInternalTxnsProps>()
const { weiToToken, getCurrentUTCDate, fromNow } = useUtils()
const token = useToken()
</script>

<template>
  <tr v-for="(trace, i) in props.traces" :key="i">
    <td v-if="(props.traces[i - 1] && props.traces[i - 1].blocknumber !== trace.blocknumber) || i === 0"
      class="bg-[#E7EAF3]">
      <p>
        <NuxtLink :to="'/block/' + trace.blocknumber">
          {{ trace.blocknumber }}
        </NuxtLink>
      </p>
    </td>
    <td v-else>&nbsp;</td>

    <td v-if="(props.traces[i - 1] && props.traces[i - 1].blocknumber !== trace.blocknumber) || i === 0"
      class="bg-[#E7EAF3]">
      <BaseTooltip :text="getCurrentUTCDate(Number(trace.blocktimestamp), true)" extra-classes="w-[140px]">
        {{ fromNow(Number(trace.blocktimestamp)) }}
      </BaseTooltip>
    </td>
    <td v-else>&nbsp;</td>

    <td class="bg-[#F8FAFD]">
      <p>
        <NuxtLink :to="'/tx/' + trace.transactionhash" class="block truncate w-40">
          {{ trace.transactionhash }}
        </NuxtLink>
      </p>
    </td>
    <td>
      <div class="flex items-center">
        <TraceError :error="trace.error" />
        <span>{{ trace.calltype }}</span>
      </div>
    </td>
    <td>
      <AddressWithCopy :from-or-to-address="trace.fromaddress" />
    </td>
    <td>
      <NuxtIcon name="arrow-right-solid" />
    </td>
    <td>
      <AddressWithCopy :from-or-to-address="trace.toaddress" />
    </td>
    <td>{{ weiToToken(trace.value, true) }} {{ token }}</td>
  </tr>
</template>
