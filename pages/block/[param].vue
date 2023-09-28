<script setup lang="ts">
import * as api_pb from '~~/proto/api_pb'

const { capitalize } = useUtils()
const route = useRoute()
const errorMessage500 = useErrorMessage500()
const url = computed(() => {
  const param = route.params.param.toString()
  const pattern = '^[0-9]+$'
  if (param.match(pattern)) {
    return '/api/block/number/' + param
  } else {
    return '/api/block/hash/' + param
  }
})
const block = ref<api_pb.Block.AsObject | null>(null)
const minBlockNumber = ref<number>(0)
const maxBlockNumber = ref<number>(0)

const { data, error } = await useFetch<api_pb.BlockResponse.AsObject>(url)
if (error.value) {
  if (error.value.statusCode === 404) {
    throw createError({ message: capitalize(error.value.data.message), statusCode: 404, fatal: true })
  } else {
    throw createError({ message: errorMessage500.value, statusCode: 500, fatal: true })
  }
}
if (data.value) {
  if (data.value.block !== undefined) {
    block.value = data.value.block
  }
  if (data.value.latestblocknumber !== undefined) {
    maxBlockNumber.value = data.value.latestblocknumber
  }
}

const tabNames = computed(() => {
  let tabs = ['Overview']
  return tabs
})
const { tabbedPaneNames, tabbedPanes, updateTabbedPanes } = useTabbedPanes(tabNames.value)

definePageMeta({
  middleware: 'block'
})
</script>

<template>
  <main>
    <section class="pt-8">
      <div class="container">
        <h1>Block <span class="text-qan-gray-900">#{{ block?.number }}</span></h1>
        <BaseHr />

        <TabbedPane :names="tabbedPaneNames" @update-tabbed-panes="updateTabbedPanes">
          <template #tabs>
            <div v-for="(pane, i) in tabbedPanes" :key="i" :class="{ hidden: !pane.active }">
              <div v-if="pane.id === 0 && block">
                <TabBlockOverview :block="block" :max-block-number="maxBlockNumber" :min-block-number="minBlockNumber" />
              </div>
            </div>
          </template>
        </TabbedPane>

        <DevSection label="Block" :pre="block" />
      </div>
    </section>
  </main>
</template>
