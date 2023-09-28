<script setup lang="ts">
import * as api_pb from '~~/proto/api_pb'

interface TabAddressTxsProps {
  address: string
  txs: api_pb.Transaction.AsObject[]
  txsCount: number
}

const props = defineProps<TabAddressTxsProps>()
const { formatNumber } = useUtils()
</script>

<template>
  <BaseCard class="p-3">
    <template #body>
      <p v-if="props.txsCount > 25" class="text-qan-gray-900 mb-3">
        Latest 25 from a total of <NuxtLink :to="'/txs?a=' + props.address">{{ formatNumber(props.txsCount) }}
        </NuxtLink> transactions
      </p>
      <p v-else class="text-qan-gray-900 mb-3">
        Latest {{ props.txsCount }} from a total of {{ props.txsCount }} transactions
      </p>

      <BaseTableResponsive>
        <template #default>
          <BaseTable>
            <template #thead>
              <HeadTxs />
            </template>

            <template #tbody>
              <template v-if="props.txs.length > 0">
                <ListTx v-for="(tx, i) in props.txs" :key="i" :tx="tx" :current-address="props.address" />
              </template>
              <template v-else>
                <ListNoMatches />
              </template>
            </template>
          </BaseTable>
        </template>
      </BaseTableResponsive>

      <NuxtLink v-if="props.txsCount > 25" :to="'/txs?a=' + props.address" class="button button-sm block text-center">
        View all transactions
      </NuxtLink>
    </template>
  </BaseCard>
</template>
