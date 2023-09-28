<script setup lang="ts">
import * as api_pb from '~~/proto/api_pb'

interface LatestTxsProps {
  txs: api_pb.Transaction.AsObject[] | null
}

const props = defineProps<LatestTxsProps>()
</script>

<template>
  <BaseCard>
    <template #headerTitle>Latest Transactions</template>

    <template #body>
      <div class="px-3">
        <ListItem v-for="(tx, index) in props.txs" :key="index" :tx="tx" />
      </div>
    </template>

    <template #footer>
      <NuxtLink to="/txs" class="button button-sm block text-center">View all transactions</NuxtLink>
    </template>
  </BaseCard>
</template>
