<script setup lang="ts">
import * as api_pb from '~~/proto/api_pb'

interface TabStateProps {
  stateChanges: api_pb.StateChange.AsObject[]
}
const props = defineProps<TabStateProps>()
</script>

<template>
  <BaseCard class="p-3">
    <template #body>
      <p class="mb-4">
        A set of information that represents the current state is updated when a transaction takes place on the network.
        The below is a summary of those changes:
      </p>

      <BaseTableResponsive>
        <template #default>
          <BaseTable>
            <template #thead>
              <tr>
                <th>&nbsp;</th>
                <th>Address</th>
                <th>Before</th>
                <th>After</th>
                <th>State Difference</th>
              </tr>
            </template>
            <template #tbody>
              <ListState v-for="(state, i) in props.stateChanges" :key="i" :state="state" />
            </template>
          </BaseTable>
        </template>
      </BaseTableResponsive>
    </template>
  </BaseCard>
</template>
