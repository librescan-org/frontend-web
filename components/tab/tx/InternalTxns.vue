<script setup lang="ts">
import * as api_pb from '~~/proto/api_pb'
import { LabelType } from '~~/types/common'

interface TabTxInternalTxnsProps {
  traces: api_pb.Trace.AsObject[]
}

const props = defineProps<TabTxInternalTxnsProps>()
const showZeroValue = ref<boolean>(false)

const filteredTraces = computed(() => {
  if (!showZeroValue.value) {
    return props.traces.filter((trace) => trace.value !== '0')
  }
  return props.traces
})

const onClickToggle = () => {
  showZeroValue.value = !showZeroValue.value
}
</script>

<template>
  <BaseCard class="p-3">
    <template #body>
      <div class="grid grid-cols-2 gap-4">
        <p class="mb-4">{{ props.traces.length }} Internal Transactions</p>

        <div class="text-right">
          <div class="inline-flex flex-wrap items-center">
            <p class="mr-2">Show Zero Value Traces</p>
            <BaseLabelDefault class="cursor-pointer select-none"
              :type="showZeroValue ? LabelType.Primary : LabelType.Secondary" @click="onClickToggle">
              Show
            </BaseLabelDefault>
            <BaseLabelDefault class="cursor-pointer select-none"
              :type="!showZeroValue ? LabelType.Primary : LabelType.Secondary" @click="onClickToggle">
              Hide
            </BaseLabelDefault>
          </div>
        </div>
      </div>

      <BaseTableResponsive>
        <template #default>
          <BaseTable>
            <template #thead>
              <tr>
                <th>Type</th>
                <th>From</th>
                <th>&nbsp;</th>
                <th>To</th>
                <th>Value</th>
                <th>Gas</th>
              </tr>
            </template>
            <template #tbody>
              <ListInternalTxnsByTxHash v-for="(trace, i) in filteredTraces" :key="i" :trace="trace" />
            </template>
          </BaseTable>
        </template>
      </BaseTableResponsive>
    </template>
  </BaseCard>
</template>
