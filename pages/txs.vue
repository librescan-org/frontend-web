<script setup lang="ts">
import * as api_pb from '~~/proto/api_pb'

const route = useRoute()
const queryBlock = ref<string>(route.query.block?.toString() ?? '')
const queryAddress = ref<string>(route.query.a?.toString() ?? '')
const url = computed(() => {
  if (queryAddress.value) {
    return '/api/transactions/address/' + queryAddress.value
  } else if (queryBlock.value) {
    return '/api/transactions/block/' + queryBlock.value
  } else {
    return '/api/transactions'
  }
})

const { page, pageTotal, limit, totalCount, updatePage, updateLimit, setPageTotal } = usePagination()
const { formatNumber } = useUtils()
const txs = ref<api_pb.Transaction.AsObject[]>([])

const { data } = await useFetch<api_pb.TransactionsListResponse.AsObject>(() => `${url.value}?page=${page.value}&limit=${limit.value}`)
if (data.value) {
  txs.value = data.value.transactionsList
  totalCount.value = data.value.totalrecords
  setPageTotal()
}

watch(data, () => {
  if (data.value) {
    txs.value = data.value.transactionsList
  }
})
</script>

<template>
  <main>
    <section class="pt-8">
      <div class="container">
        <h1>Transactions</h1>

        <p v-if="!!queryAddress" class="text-qan-gray-900 -mt-4 mb-4 break-words">
          For <NuxtLink :to="'/address/' + queryAddress">{{ queryAddress }}</NuxtLink>
        </p>
        <p v-if="!!queryBlock" class="text-qan-gray-900 -mt-4 mb-4 break-words">
          For block <NuxtLink :to="'/block/' + queryBlock">{{ queryBlock }}</NuxtLink>
        </p>

        <QueryList :page="page" :page-total="pageTotal" @update-page="updatePage" @update-limit="updateLimit">
          <template #headerText>
            <p class="text-qan-gray-900">A total of {{ formatNumber(totalCount) }} transactions found</p>
          </template>

          <template #thead>
            <HeadTxs />
          </template>

          <template #tbody>
            <template v-if="txs.length > 0">
              <ListTx v-for="(tx, i) in txs" :key="i" :tx="tx" :current-address="queryAddress" />
            </template>
            <template v-else>
              <ListNoMatches />
            </template>
          </template>
        </QueryList>
      </div>
    </section>

    <DevSection label="Txs" :pre="txs" />
  </main>
</template>
