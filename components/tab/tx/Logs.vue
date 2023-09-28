<script setup lang="ts">
import * as api_pb from '~~/proto/api_pb'

interface TabTxLogsProps {
  logs: api_pb.Log.AsObject[]
}

const props = defineProps<TabTxLogsProps>()
</script>

<template>
  <BaseCard class="p-3">
    <template #body>
      <p class="mb-4">Transaction Receipt Event Logs</p>

      <div v-for="(log, i) in props.logs" :key="i">
        <EventLog :log="log" />
        <BaseHr class="my-6" v-if="i < props.logs.length - 1" />
        <div v-else class="mb-3" />
      </div>
    </template>
  </BaseCard>
</template>
