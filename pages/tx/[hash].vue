<script setup lang="ts">
import * as api_pb from '~~/proto/api_pb'

const { capitalize } = useUtils()
const errorMessage500 = useErrorMessage500()
const route = useRoute()
const hash = route.params.hash
const tx = ref<api_pb.Transaction.AsObject | null>(null)
const logs = ref<api_pb.Log.AsObject[]>([])
const traces = ref<api_pb.Trace.AsObject[]>([])
const stateChanges = ref<api_pb.StateChange.AsObject[]>([])

const { data, error } = await useFetch<api_pb.GetTransactionResponse.AsObject>('/api/transaction/' + hash)
if (error.value) {
  if (error.value.statusCode === 404) {
    throw createError({ message: capitalize(error.value.data.message), statusCode: 404, fatal: true })
  } else {
    throw createError({ message: errorMessage500.value, statusCode: 500, fatal: true })
  }
}
if (data.value) {
  if (data.value.transaction !== undefined) {
    tx.value = data.value.transaction
  }
  logs.value = data.value.logsList
  traces.value = data.value.tracesList
  stateChanges.value = data.value.statechangesList

  logs.value.sort((a, b) => {
    const x = a.index
    const y = b.index
    return ((x < y) ? -1 : ((x > y) ? 1 : 0))
  })
}

const tabNames = computed(() => {
  let tabs = ['Overview']

  if (traces.value.length > 0) {
    tabs[1] = 'Internal Txns'
  }

  if (logs.value.length > 0) {
    const tabLogs = 'Logs (' + logs.value.length + ')'
    tabs[2] = tabLogs
  }

  if (tx.value && tx.value.accessobjectsList.length > 0) {
    tabs[3] = 'Access List'
  }

  if (stateChanges.value.length > 0) {
    tabs[4] = 'State'
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
  middleware: 'tx'
})
</script>

<template>
  <main>
    <section class="pt-8">
      <div class="container">
        <h1>Transaction details</h1>
        <BaseHr />

        <TabbedPane :names="tabbedPaneNames" @update-tabbed-panes="updateTabbedPanes">
          <template #tabs>
            <div v-for="(pane, i) in tabbedPanes" :key="i" :class="{ hidden: !pane.active }">
              <div v-if="pane.id === 0 && tx">
                <TabTxOverview :tx="tx" :token-price="tokenPrice" />
              </div>

              <div v-else-if="pane.id === 1 && traces.length > 0">
                <TabTxInternalTxns :traces="traces" />
              </div>

              <div v-else-if="pane.id === 2 && logs.length > 0">
                <TabTxLogs :logs="logs" />
              </div>

              <div v-else-if="pane.id === 3 && tx && tx.accessobjectsList.length > 0">
                <TabTxAccessList :tx="tx" />
              </div>

              <div v-else-if="pane.id === 4 && stateChanges.length > 0">
                <TabTxState :state-changes="stateChanges" />
              </div>
            </div>
          </template>
        </TabbedPane>
      </div>
    </section>

    <DevSection label="Tx" :pre="tx" />
    <DevSection label="Logs" :pre="logs" />
    <DevSection label="Traces" :pre="traces" />
    <DevSection label="States" :pre="stateChanges" />
  </main>
</template>
