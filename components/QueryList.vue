<script setup lang="ts">
import { TableValign } from '~~/types/common'

interface QueryListProps {
  page: number
  pageTotal: number
  tableValign?: TableValign,
  border?: boolean
}

const props = withDefaults(defineProps<QueryListProps>(), {
  tableValign: TableValign.Middle,
  border: true
})

const emit = defineEmits(['updatePage', 'updateLimit'])

const updatePage = (page: number): void => {
  emit('updatePage', page)
}

const updateLimit = (limit: number): void => {
  emit('updateLimit', limit)
}
</script>

<template>
  <div>
    <BaseCard :border="props.border">
      <template #body>
        <div class="p-3">
          <div class="grid max-md:grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <div>
              <slot name="headerText" />
            </div>
            <div class="flex items-center max-md:justify-start md:justify-end">
              <BasePagination :page="props.page" :page-total="props.pageTotal" @update-page="updatePage" />
            </div>
          </div>

          <BaseTableResponsive>
            <template #default>
              <BaseTable :td-valign="props.tableValign">
                <template #thead>
                  <slot name="thead" />
                </template>
                <template #tbody>
                  <slot name="tbody" />
                </template>
              </BaseTable>
            </template>
          </BaseTableResponsive>

          <div class="grid max-md:grid-col-1 md:grid-cols-2 gap-4 mt-5">   
            <BasePageLimit @on-change-limit="updateLimit" />
            <div class="flex items-center max-md:justify-start md:justify-end">
              <BasePagination :page="props.page" :page-total="props.pageTotal" @update-page="updatePage" />
            </div>
          </div>
        </div>
      </template>
    </BaseCard>
  </div>
</template>
