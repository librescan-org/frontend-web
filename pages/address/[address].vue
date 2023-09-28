<script setup lang="ts">
import * as api_pb from '~~/proto/api_pb'
import { AddressOverview, AddressType } from '~~/types/common'

const route = useRoute()
const address: string = route.params.address.toString()
const errorMessage500 = useErrorMessage500()

const addressOverview = ref<AddressOverview | null>(null)
const { data: dataInspectAddress, error: errorInspectAddress } = await useFetch<api_pb.InspectAddressResponse.AsObject>('/api/address/' + address)
if (errorInspectAddress.value) {
  throw createError({ message: errorMessage500.value, statusCode: 500, fatal: true })
}
if (dataInspectAddress.value) {
  addressOverview.value = {
    'contractdata': dataInspectAddress.value.contractdata,
    'tokenstatistics': dataInspectAddress.value.tokenstatistics,
    'walletstatistics': dataInspectAddress.value.walletstatistics,
  }
}

const addressType = computed(() => {
  if (!dataInspectAddress.value) {
    return AddressType.Unknown
  }

  const contract = Object.hasOwn(dataInspectAddress.value, 'contractdata')
  const token = Object.hasOwn(dataInspectAddress.value, 'tokenstatistics')

  if (contract && token) {
    return AddressType.Token
  } else if (!contract && token) { // Because of debug mode
    return AddressType.Token
  } else if (!contract) {
    return AddressType.Address
  } else {
    return AddressType.Contract
  }
})

const erc20TokenTransfers = ref<api_pb.erc20TokenTransfer.AsObject[]>([])
const erc20TokenTransfersCount = ref<number>(0)
const { data: dataErc20 } = await useFetch<api_pb.ListErc20TokenTransfersResponse.AsObject>('/api/token/erc20/address/' + address)
if (dataErc20.value) {
  erc20TokenTransfers.value = dataErc20.value.erc20tokentransferList
  erc20TokenTransfersCount.value = dataErc20.value.totalrecords
}

const txs = ref<api_pb.Transaction.AsObject[]>([])
const txsCount = ref<number>(0)
const { data: dataTxs } = await useFetch<api_pb.TransactionsListResponse.AsObject>('/api/transactions/address/' + address + '?page=1&limit=25')
if (dataTxs.value) {
  txs.value = dataTxs.value.transactionsList
  txsCount.value = dataTxs.value.totalrecords
}

const tabNames = computed(() => {
  let tabs = ['Transactions']

  if (erc20TokenTransfersCount.value > 0) {
    tabs[1] = 'Token Transfers (ERC-20)'
  }

  if (addressType.value === AddressType.Contract || addressType.value === AddressType.Token) {
    tabs[2] = 'Contract'
  }

  return tabs
})
const { tabbedPaneNames, tabbedPanes, updateTabbedPanes } = useTabbedPanes(tabNames.value)

const token = useToken()
const tokenPrice = ref<number | null>(0)
const { data: dataPrice } = await useFetch<{ usd: number }>('/api/token/price/' + token.value)
if (dataPrice.value) {
  tokenPrice.value = dataPrice.value.usd
}

definePageMeta({
  middleware: 'address'
})
</script>

<template>
  <main>
    <DevOnly>
      <section>
        <div class="container overflow-scroll">
          <div class="mb-4">
            <div>Type:</div>
            <pre>{{ addressType }}</pre>
          </div>
          <div>
            <pre>{{ addressOverview }}</pre>
          </div>
        </div>
      </section>
    </DevOnly>

    <section class="pt-8">
      <div class="container">
        <h1>
          <span v-if="addressType === AddressType.Address">Address</span>
          <span v-else-if="addressType === AddressType.Contract">Contract</span>
          <span v-else="addressType === AddressType.Token">Contract (Token)</span>
          <span v-if="address" class="text-qan-gray-900 text-base break-all"> - {{ address }}</span>
        </h1>

        <TabAddressOverviewAndMoreInfo :address-overview="addressOverview" :address-type="addressType"
          :token-price="tokenPrice" />

        <TabbedPane :names="tabbedPaneNames" @update-tabbed-panes="updateTabbedPanes">
          <template #tabs>
            <div v-for="(pane, i) in tabbedPanes" :key="i" :class="{ hidden: !pane.active }">
              <div v-if="pane.id === 0 && txs">
                <TabAddressTxs :address="address" :txs="txs" :txs-count="txsCount" />
              </div>

              <div v-if="pane.id === 1 && erc20TokenTransfersCount > 0">
                <TabAddressTokenERC20 :address="address" :erc20-token-transfers="erc20TokenTransfers"
                  :erc20-token-transfers-count="erc20TokenTransfersCount" />
              </div>

              <div v-if="pane.id === 2 && addressOverview && addressOverview.contractdata">
                <TabContract :contractdata="addressOverview.contractdata" />
              </div>
            </div>
          </template>
        </TabbedPane>
      </div>
    </section>

    <DevSection label="Txs" :pre="txs" />
    <DevSection label="ERC20 Token Transfers" :pre="erc20TokenTransfers" />
  </main>
</template>
