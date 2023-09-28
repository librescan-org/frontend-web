<script setup lang="ts">
import * as api_pb from '~~/proto/api_pb'
import { LabelType } from '~~/types/common'

interface TabContractProps {
  contractdata: api_pb.InspectAddressResponse.AsObject['contractdata']
}
const props = defineProps<TabContractProps>()
const { base64ToHex } = useUtils()

const isBytecode = ref<boolean>(true)
if (props.contractdata?.qancontractdata?.source) {
  isBytecode.value = false
}

const toggleBytecode = () => {
  isBytecode.value = !isBytecode.value
}
</script>

<template>
  <BaseCard v-if="contractdata" class="p-3">
    <template #body>
      <div v-if="contractdata.qancontractdata"
        class=" grid grid-cols-1 lg:grid-cols-2 gap-2 mb-6 bg-slate-50 p-3 rounded-lg">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-2">
          <div class="font-medium">Language:</div>
          <div class="text-qan-gray-900 pb-2 sm:pb-0">{{ contractdata.qancontractdata.language }}</div>

          <div class="font-medium">Compiler Version:</div>
          <div class="text-qan-gray-900">{{ contractdata.qancontractdata.compilerversion }}</div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-2">
          <div class="font-medium">Compressor Version:</div>
          <div class="text-qan-gray-900 pb-2 sm:pb-0">{{ contractdata.qancontractdata.compressorversion }}</div>

          <div class="font-medium">Binary Hash:</div>
          <div class="text-qan-gray-900 pb-2 sm:pb-0">{{ contractdata.qancontractdata.binaryhash }}</div>
        </div>
      </div>

      <div class="flex items-center mb-3">
        <BaseLabelDefault :type="isBytecode ? LabelType.Primary : LabelType.Secondary"
          class="cursor-pointer select-none mr-1" @click="toggleBytecode">Bytecode</BaseLabelDefault>
        <BaseLabelDefault :type="!isBytecode ? LabelType.Primary : LabelType.Secondary" class="cursor-pointer select-none"
          @click="toggleBytecode">Source Code</BaseLabelDefault>
        <BaseCopyToClipboard
          :text="isBytecode ? base64ToHex(contractdata.bytecode) : contractdata.qancontractdata?.source" class="ml-1" />
      </div>

      <div v-if="isBytecode" class="bg-slate-50 text-qan-gray-900 outline-none p-3 rounded w-full">{{
        base64ToHex(contractdata.bytecode) }}</div>

      <template v-if="contractdata.qancontractdata && !isBytecode">
        <ClientOnly>
          <CodeBlock :code="contractdata.qancontractdata.source" :language="contractdata.qancontractdata.language" />
        </ClientOnly>
      </template>
    </template>
  </BaseCard>
</template>
