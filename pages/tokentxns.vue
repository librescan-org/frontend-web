<script setup lang="ts">
import * as api_pb from '~~/proto/api_pb'

const route = useRoute()
const queryAddress = ref<string>(route.query.a?.toString() ?? '')
const url = computed(() => {
  if (queryAddress.value) {
    return '/api/token/erc20/address/' + queryAddress.value
  } else {
    return '/api/token/erc20'
  }
})

const { page, pageTotal, limit, totalCount, updatePage, updateLimit, setPageTotal } = usePagination()
const erc20TokenTransfers = ref<api_pb.erc20TokenTransfer.AsObject[]>([])

const { data } = await useFetch<api_pb.ListErc20TokenTransfersResponse.AsObject>(() => `${url.value}?page=${page.value}&limit=${limit.value}`)
if (data.value) {
  erc20TokenTransfers.value = data.value.erc20tokentransferList
  totalCount.value = data.value.totalrecords
  setPageTotal()
}

watch(data, () => {
  if (data.value) {
    erc20TokenTransfers.value = data.value.erc20tokentransferList
  }
})
</script>

<template>
  <main>
    <section class="pt-8">
      <div class="container">
        <h1>Token Transfers (ERC-20)</h1>

        <p v-if="!!queryAddress" class="text-qan-gray-900 -mt-4 mb-4 break-words">
          For <NuxtLink :to="'/address/' + queryAddress">{{ queryAddress }}</NuxtLink>
        </p>

        <QueryList :page="page" :page-total="pageTotal" @update-page="updatePage" @update-limit="updateLimit">
          <template #headerText>
            <p class="text-qan-gray-900">{{ totalCount }} transactions found</p>
          </template>

          <template #thead>
            <HeadTokenERC20 />
          </template>

          <template #tbody>
            <template v-if="erc20TokenTransfers.length > 0">
              <ListTokenERC20 v-for="(transfer, i) in erc20TokenTransfers" :key="i" :current-address="queryAddress" :transfer="transfer" />
            </template>
            <template v-else>
              <ListNoMatches />
            </template>
          </template>
        </QueryList>

      </div>
    </section>

    <DevSection label="ERC20 Token Transfers" :pre="erc20TokenTransfers" />
  </main>
</template>
