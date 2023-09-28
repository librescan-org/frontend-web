<script setup lang="ts">
import * as api_pb from '~~/proto/api_pb'

interface DetailsInternalTxns {
  trace: api_pb.Trace.AsObject
}

const props = defineProps<DetailsInternalTxns>()
const { formatStringWithCommas, weiToToken } = useUtils()
const token = useToken()
</script>

<template>
  <tr>
    <td class="w-[350px]">
      <div class="flex items-center">
        <TraceError :error="props.trace.error" />
        <span>{{ props.trace.calltype }}</span>
      </div>
    </td>
    <td class="w-[220px]">
      <AddressWithCopy :from-or-to-address="trace.fromaddress" />
    </td>
    <td class="w-[70px]">
      <NuxtIcon name="arrow-right-solid" />
    </td>
    <td class="w-[300px]">
      <AddressWithCopy :from-or-to-address="trace.toaddress" />
    </td>
    <td>{{ weiToToken(trace.value, true) }} {{ token }}</td>
    <td>{{ formatStringWithCommas(props.trace.gas) }}</td>
  </tr>
</template>
