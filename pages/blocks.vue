<script setup lang="ts">
import * as api_pb from '~~/proto/api_pb'
import { TableValign } from '~~/types/common'

const { page, pageTotal, limit, totalCount, updatePage, updateLimit, setPageTotal } = usePagination()
const { formatNumber } = useUtils()
const blocks = ref<api_pb.Block.AsObject[]>([])

const { data } = await useFetch<api_pb.ListBlocksResponse.AsObject>(() => `/api/blocks?page=${page.value}&limit=${limit.value}`)
if (data.value) {
  blocks.value = data.value.blocksList
  totalCount.value = data.value.totalrecords
  setPageTotal()
}

const currentFirstBlockNumber = computed(() => blocks.value.length > 0 ? blocks.value[0].number : '')
const currentLastBlockNumber = computed(() => blocks.value.length > 0 ? blocks.value[blocks.value.length - 1].number : '')

watch(data, () => {
  if (data.value) {
    blocks.value = data.value.blocksList
  }
})
</script>

<template>
  <main>
    <section class="pt-8">
      <div class="container">
        <h1>Blocks</h1>

        <QueryList :page="page" :page-total="pageTotal" :table-valign="TableValign.Top" @update-page="updatePage"
          @update-limit="updateLimit">
          <template #headerText>
            <p>Total of {{ formatNumber(totalCount) }} blocks</p>
            <p class="text-qan-gray-900">(Showing blocks between #{{ currentLastBlockNumber }} to #{{ currentFirstBlockNumber }})</p>
          </template>

          <template #thead>
            <tr>
              <th>Block</th>
              <th>Age</th>
              <th>Txn</th>
              <th>Hash</th>
              <th>Gas Used</th>
              <th>Gas Limit</th>
              <th>Reward</th>
              <th>Burnt Fees</th>
            </tr>
          </template>

          <template #tbody>
            <template v-if="blocks.length > 0">
              <ListBlock v-for="(block, index) in blocks" :key="index" :block="block"/>
            </template>
            <template v-else>
              <ListNoMatches />
            </template>
          </template>
        </QueryList>
      </div>
    </section>

    <DevSection label="Blocks" :pre="blocks" />
  </main>
</template>
