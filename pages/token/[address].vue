<script setup lang="ts">
import * as api_pb from '~~/proto/api_pb'
import { AddressOverview, AddressType } from '~~/types/common'

const route = useRoute()
const errorMessage500 = useErrorMessage500()
const address: string = route.params.address.toString()

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

const router = useRouter()
if (addressType.value !== AddressType.Token && addressType.value !== AddressType.Unknown) {
  router.push('/address/' + address)
}

const erc20TokenTransfers = ref<api_pb.erc20TokenTransfer.AsObject[]>([])
const erc20TokenTransfersCount = ref<number>(0)
const { data: dataErc20 } = await useFetch<api_pb.ListErc20TokenTransfersResponse.AsObject>('/api/token/erc20/address/' + address)
if (dataErc20.value) {
  erc20TokenTransfers.value = dataErc20.value.erc20tokentransferList
  erc20TokenTransfersCount.value = dataErc20.value.totalrecords
}

const tabNames = computed(() => {
  let tabs = ['Transfers']

  if (addressType.value === AddressType.Contract || addressType.value === AddressType.Token) {
    tabs[1] = 'Contract'
  }

  return tabs
})
const { tabbedPaneNames, tabbedPanes, updateTabbedPanes } = useTabbedPanes(tabNames.value)

const token = useToken()
const tokenEthPrice = ref<number | null>(0)
const { data: dataEthPrice } = await useFetch<{ usd: number }>('/api/token/price/' + token.value)
if (dataEthPrice.value) {
  tokenEthPrice.value = dataEthPrice.value.usd
}

const tokenPrice = ref<number | null>(0)
const { data: dataPrice } = await useFetch<{ usd: number }>('/api/token/price/' + addressOverview.value?.tokenstatistics?.symbol)
if (dataPrice.value) {
  tokenPrice.value = dataPrice.value.usd
}
</script>

<template>
  <main>
    <section class="pt-8">
      <div class="container">
        <h1>
          <span class="mr-1">Token</span>
          <span v-if="addressOverview?.tokenstatistics" class="text-qan-gray-900 text-base">
            {{ addressOverview.tokenstatistics.name + ' (' + addressOverview.tokenstatistics.symbol + ')' }}
          </span>
        </h1>
        <TabTokenOverviewAndProfileSummary :address-overview="addressOverview" :address="address"
          :token-price="tokenPrice" :token-eth-price="tokenEthPrice" />

        <TabbedPane :names="tabbedPaneNames" @update-tabbed-panes="updateTabbedPanes">
          <template #tabs>
            <div v-for="(pane, i) in tabbedPanes" :key="i" :class="{ hidden: !pane.active }">
              <div v-if="pane.id === 0">
                <TabAddressTokenERC20 :address="address" :erc20-token-transfers="erc20TokenTransfers"
                  :erc20-token-transfers-count="erc20TokenTransfersCount" />
              </div>

              <div v-if="pane.id === 1 && addressOverview && addressOverview.contractdata">
                <TabContract :contractdata="addressOverview.contractdata" />
              </div>
            </div>
          </template>
        </TabbedPane>
      </div>
    </section>

    <DevSection label="Inspect Address:" :pre="addressOverview" />
    <DevSection label="Token Transfers:" :pre="erc20TokenTransfers" />
  </main>
</template>
