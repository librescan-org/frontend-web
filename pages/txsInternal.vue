<script setup lang="ts">
import * as api_pb from '~~/proto/api_pb'

const route = useRoute()
const queryBlockNumber = ref<string>(route.query.block?.toString() ?? '')

const url = computed(() => {
  if (queryBlockNumber.value) {
    return '/api/traces/blockNumber/' + queryBlockNumber.value
  } else {
    return '/api/traces'
  }
})

const { page, pageTotal, limit, totalCount, updatePage, updateLimit, setPageTotal } = usePagination()
const { formatNumber } = useUtils()
const traces = ref<api_pb.Trace.AsObject[]>([])

const { data } = await useFetch<api_pb.ListTracesResponse.AsObject>(() => `${url.value}?page=${page.value}&limit=${limit.value}`)
if (data.value) {
  traces.value = data.value.tracesList
  totalCount.value = data.value.totalrecords
  setPageTotal()
}

watch(data, () => {
  if (data.value) {
    traces.value = data.value.tracesList
  }
})
</script>

<template>
  <main>
    <section class="pt-8">
      <div class="container">
        <h1>Contract Internal Transactions</h1>
        <p v-if="queryBlockNumber" class="text-qan-gray-900 -mt-1 mb-4 break-words">
          For block <NuxtLink :to="'/block/' + queryBlockNumber">{{ queryBlockNumber }}</NuxtLink>
        </p>

        <QueryList :page="page" :page-total="pageTotal" @update-page="updatePage" @update-limit="updateLimit">
          <template #headerText>
            <p class="text-qan-gray-900">
              A total of {{ formatNumber(totalCount) }} internal transactions found<br />
            </p>
          </template>

          <template #thead>
            <tr>
              <th>Block</th>
              <th>Age</th>
              <th>Txn Hash</th>
              <th>Type</th>
              <th>From</th>
              <th>&nbsp;</th>
              <th>To</th>
              <th>Value</th>
            </tr>
          </template>

          <template #tbody>
            <template v-if="traces.length > 0">
              <ListInternalTxns :traces="traces" />
            </template>
            <template v-else>
              <ListNoMatches />
            </template>
          </template>
        </QueryList>
      </div>
    </section>

    <DevSection label="Traces" :pre="traces" />
  </main>
</template>
