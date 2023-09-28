<script setup lang="ts">
import { DateFormat, LabelType } from '~~/types/common'

interface TimestampProps {
  timestamp: number
}
const props = defineProps<TimestampProps>()
const { fromNow, getCurrentUTCDate } = useUtils()
const selectedDateFormat = ref<DateFormat>(DateFormat.Date)

const date = computed(() => {
  return fromNow(Number(props.timestamp)) + ' (' + getCurrentUTCDate(Number(props.timestamp)) + ')'
})

const onChangeDateFormat = (dateFormat: DateFormat) => {
  selectedDateFormat.value = dateFormat
}
</script>

<template>
  <div class="grid grid-cols-1 xl:grid-cols-2">
    <div class="flex items-center">
      <NuxtIcon name="clock-regular" class="mr-1" />
      <span>{{ selectedDateFormat === DateFormat.Date ? date : props.timestamp }}</span>
      <BaseCopyToClipboard :text="selectedDateFormat === DateFormat.Date ? date : props.timestamp.toString()"
        :title="selectedDateFormat === DateFormat.Date ? 'Date' : 'Timestamp'"
        :extra-classes="selectedDateFormat === DateFormat.Date ? 'w-[90px]' : 'w-[120px]'" class="ml-1" />
    </div>

    <div class="xl:text-right max-xl:mt-1">
      <BaseLabelDefault class="mr-1 cursor-pointer select-none" @click="onChangeDateFormat(DateFormat.Timestamp)"
        :type="selectedDateFormat === DateFormat.Timestamp ? LabelType.Primary : LabelType.Secondary">
        Timestamp
      </BaseLabelDefault>

      <BaseLabelDefault class="cursor-pointer select-none" @click="onChangeDateFormat(DateFormat.Date)"
        :type="selectedDateFormat === DateFormat.Date ? LabelType.Primary : LabelType.Secondary">
        Date
      </BaseLabelDefault>
    </div>
  </div>
</template>
