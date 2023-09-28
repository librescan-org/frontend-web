<script setup lang="ts">
import * as api_pb from '~~/proto/api_pb'
import { BoxType, LabelType, DataType } from '~~/types/common'
import { ethers } from 'ethers'

interface EventLogProps {
  log: api_pb.Log.AsObject
}

const props = defineProps<EventLogProps>()
const { base64ToHex } = useUtils()
const displayType = ref<DataType>(DataType.Hex)
const displayOnlyHex = ref<boolean>(true)

const changeDisplayType = (type: DataType) => {
  displayType.value = type
}

const hex2Utf8 = (hex: string) => {
  const str = hex.substring(2)
  let bytes = new Uint8Array(Math.ceil(str.length / 2))
  for (let i = 0; i < bytes.length; i++) bytes[i] = parseInt(str.substr(i * 2, 2), 16)
  return ethers.utils.toUtf8String(bytes)
}

const isUtf8 = (hex: string) => {
  try {
    hex2Utf8(hex)
    return true
  } catch (e) {
    return false
  }
}


onMounted(() => {
  if (isUtf8(props.log.data.toString())) {
    displayOnlyHex.value = false
  }
})
</script>

<template>
  <div class="flex flex-wrap items-start">
    <div class="max-sm:flex-[0_0_100%] max-sm:mb-4">
      <BaseBox :title="log.index.toString()" :type="BoxType.Circle" class="mr-4" />
    </div>
    <div class="flex-1">
      <div class="w-[98%] sm:w-[90%] grid grid-cols-12 gap-2 sm:gap-4">
        <div class="col-span-12 sm:col-span-2 lg:col-span-1 text-left sm:text-right">Address</div>
        <div class="col-span-12 sm:col-span-10 lg:col-span-11 max-sm:mb-4">
          <p class="break-all">
            <NuxtLink :to="'/address/' + log.address">
              {{ log.address }}
            </NuxtLink>
          </p>
        </div>

        <!--
        <div class="col-span-1 text-right text-qan-gray-900">Name</div>
        <div class="col-span-11">
          <p>Transfer (index_topic_1 address from, index_topic_2 address to, uint256 value) <a href="#">View Source</a>
          </p>
        </div>
        -->

        <div class="col-span-12 sm:col-span-2 lg:col-span-1 text-left sm:text-right text-qan-gray-900">Topics</div>
        <div class="col-span-12 sm:col-span-10 lg:col-span-11 max-sm:mb-2">
          <div v-if="log.topic0" class="mb-2 flex items-start">
            <div>
              <BaseLabelDefault :type="LabelType.Secondary" class="mr-2 w-7 px-0 text-center">0</BaseLabelDefault>
            </div>
            <div class="pt-[3px] break-all">{{ base64ToHex(log.topic0) }}</div>
          </div>
          <div v-if="log.topic1" class="mb-2 flex items-start">
            <div>
              <BaseLabelDefault :type="LabelType.Secondary" class="mr-2 w-7 px-0 text-center">1</BaseLabelDefault>
            </div>
            <!--
            <select v-model="displayType" class="bg-white border border-neutral-200 rounded mx-1.5 py-1 px-2">
              <option v-for="(option, index) in displayTypeOptions" :key="index" :value="option">{{ option }}</option>
            </select>
            -->
            <div class="pt-[3px] break-all">{{ base64ToHex(log.topic1) }}</div>
          </div>
          <div v-if="log.topic2" class="mb-2 flex items-start">
            <div>
              <BaseLabelDefault :type="LabelType.Secondary" class="mr-2 w-7 px-0 text-center">2</BaseLabelDefault>
            </div>
            <!--
            <select v-model="displayType" class="bg-white border border-neutral-200 rounded mx-1.5 py-1 px-2">
              <option v-for="(option, index) in displayTypeOptions" :key="index" :value="option">{{ option }}</option>
            </select>
            -->
            <div class="pt-[3px] break-all">{{ base64ToHex(log.topic2) }}</div>
          </div>
          <div v-if="log.topic3" class="mb-2 flex items-start">
            <div>
              <BaseLabelDefault :type="LabelType.Secondary" class="mr-2 w-7 px-0 text-center">3</BaseLabelDefault>
            </div>
            <!--
            <select v-model="displayType" class="bg-white border border-neutral-200 rounded mx-1.5 py-1 px-2">
              <option v-for="(option, index) in displayTypeOptions" :key="index" :value="option">{{ option }}</option>
            </select>
            -->
            <div class="pt-[3px] break-all">{{ base64ToHex(log.topic3) }}</div>
          </div>
        </div>

        <div class="col-span-12 sm:col-span-2 lg:col-span-1 text-left sm:text-right text-qan-gray-900 sm:pt-3">Data</div>
        <div class="col-span-12 sm:col-span-10 lg:col-span-11">
          <BaseLabelDefault :type="LabelType.Secondary" class="p-3 pr-20 lg:pr-36 w-full text-sm relative">
            <div v-if="displayType === DataType.Hex">{{ base64ToHex(log.data) }}</div>
            <div v-else-if="displayType === DataType.Utf8 && isUtf8(log.data.toString())">
              {{ hex2Utf8(log.data.toString()) }}
            </div>
            <div class="absolute top-[8px] right-3">
              <BaseLabelDefault :type="displayType === DataType.Hex ? LabelType.Primary : LabelType.Secondary"
                class="cursor-pointer rounded-l-none select-none" @click="changeDisplayType(DataType.Hex)">Hex
              </BaseLabelDefault>
              <BaseLabelDefault v-if="!displayOnlyHex"
                :type="displayType === DataType.Utf8 ? LabelType.Primary : LabelType.Secondary"
                class="cursor-pointer rounded-r-none select-none" @click="changeDisplayType(DataType.Utf8)">
                UTF-8</BaseLabelDefault>
            </div>
          </BaseLabelDefault>
        </div>
      </div>
    </div>
  </div>
</template>
