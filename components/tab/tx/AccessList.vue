<script setup lang="ts">
import * as api_pb from '~~/proto/api_pb'

interface TabTxLogsProps {
  tx: api_pb.Transaction.AsObject
}
const props = defineProps<TabTxLogsProps>()
const { base64ToASCII, base64ToHexZeroPad } = useUtils()
</script>

<template>
  <BaseCard class="p-3">
    <template #body>
      <p class="mb-4">Access List</p>

      <BaseCard v-for="(accesObject, i) in props.tx.accessobjectsList" :key="i" :border="false"
        :class="i < props.tx.accessobjectsList.length ? 'mb-3' : ''">
        <template #body>
          <div class="grid grid-cols-12 gap-4 bg-qan-gray-900/10 p-3 rounded-lg">
            <div class="col-span-2">
              Address
            </div>
            <div class="col-span-10">
              {{ accesObject.address }}
            </div>

            <div class="col-span-2">
              Storagekeys
            </div>
            <div class="col-span-10">
              <p v-for="(storageKey, i) in accesObject.storagekeysList" :key="i">
                <span>{{ base64ToHexZeroPad(storageKey) }}</span>
                <ClientOnly>
                  <span v-if="!!tx.qantransactioninput" class="ml-1">{{ '(' + base64ToASCII(storageKey) + ')' }}</span>
                </ClientOnly>
              </p>
            </div>
          </div>
        </template>
      </BaseCard>
    </template>
  </BaseCard>
</template>
