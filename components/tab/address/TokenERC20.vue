<script setup lang="ts">
import * as api_pb from '~~/proto/api_pb'

interface TabAddressTokenERC20Props {
  address: string
  erc20TokenTransfers: api_pb.erc20TokenTransfer.AsObject[]
  erc20TokenTransfersCount: number
}

const props = defineProps<TabAddressTokenERC20Props>()
</script>

<template>
  <BaseCard class="p-3">
    <template #body>
      <p v-if="props.erc20TokenTransfersCount > 25" class="text-qan-gray-900 mb-3">
        Latest 25 ERC-20 Token Transfer Events <NuxtLink :to="'/tokentxns?a=' + props.address">(View All)
        </NuxtLink>
      </p>
      <p v-else class="text-qan-gray-900 mb-3">
        Latest {{ props.erc20TokenTransfersCount }} ERC-20 Token Transfer Events
      </p>

      <BaseTableResponsive>
        <template #default>
          <BaseTable>
            <template #thead>
              <HeadTokenERC20 />
            </template>
            <template #tbody>
              <template v-if="props.erc20TokenTransfers.length > 0">
                <ListTokenERC20 v-for="(transfer, i) in props.erc20TokenTransfers" :key="i"
                  :current-address="props.address" :transfer="transfer" />
              </template>
              <template v-else>
                <ListNoMatches />
              </template>
            </template>
          </BaseTable>
        </template>
      </BaseTableResponsive>

      <NuxtLink v-if="props.erc20TokenTransfersCount > 25" :to="'/tokentxns?a=' + props.address"
        class="button button-sm block text-center">View all ERC-20 transactions</NuxtLink>
    </template>
  </BaseCard>
</template>
