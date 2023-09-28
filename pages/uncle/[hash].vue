<script setup lang="ts">
import * as api_pb from '~~/proto/api_pb'

const route = useRoute()
const errorMessage500 = useErrorMessage500()
const hash = route.params.hash ?? ''
const uncle = ref<api_pb.uncle.AsObject | null>(null)
const { capitalize } = useUtils()

const { data, error } = await useFetch<api_pb.GetUncleByHashResponse.AsObject>('/api/uncle/' + hash)
if (error.value) {
  if (error.value.statusCode === 404) {
    throw createError({ message: capitalize(error.value.data.message), statusCode: 404, fatal: true })
  } else {
    throw createError({ message: errorMessage500.value, statusCode: 500, fatal: true })
  }
}
if (data.value) {
  if (data.value.uncle !== undefined) {
    uncle.value = data.value.uncle
  }
}

const tabNames = computed(() => {
  let tabs = ['Overview']
  return tabs
})
const { tabbedPaneNames, tabbedPanes, updateTabbedPanes } = useTabbedPanes(tabNames.value)
</script>

<template>
  <main>
    <section class="pt-8">
      <div class="container">
        <h1>Uncle <span class="text-qan-gray-900">#{{ uncle?.hash }}</span></h1>
        <BaseHr />

        <TabbedPane :names="tabbedPaneNames" @update-tabbed-panes="updateTabbedPanes">
          <template #tabs>
            <div v-for="(pane, i) in tabbedPanes" :key="i" :class="{ hidden: !pane.active }">
              <div v-if="pane.id === 0 && uncle">
                <TabUncleOverview :uncle="uncle" />
              </div>
            </div>
          </template>
        </TabbedPane>

        <DevSection label="Uncle" :pre="uncle" />
      </div>
    </section>
  </main>
</template>
