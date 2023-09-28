<script setup lang="ts">
import { ButtonStyle } from '~~/types/common'

interface PaginationProps {
  page?: number
  pageTotal?: number
}

const props = withDefaults(defineProps<PaginationProps>(), {
  page: 0,
  pageTotal: 0
})

const emit = defineEmits(['updatePage'])

const isPrevAvailable = computed(() => props.page > 1)
const isNextAvailable = computed(() => props.page < props.pageTotal)

const prevPage = (): void => {
  if (props.page > 1) {
    emit('updatePage', props.page - 1)
  }
}

const nextPage = (): void => {
  if (props.page < props.pageTotal) {
    emit('updatePage', props.page + 1)
  }
}

const firstPage = (): void => {
  if (isPrevAvailable.value) {
    emit('updatePage', 1)
  }
}

const lastPage = (): void => {
  if (isNextAvailable.value) {
    emit('updatePage', props.pageTotal)
  }
}
</script>

<template>
  <div class="flex items-center">
    <BaseButtonDefault class="mr-1 h-7" :button-style="ButtonStyle.Small" :disabled="!isPrevAvailable"
      @click.native="firstPage">
      First
    </BaseButtonDefault>

    <BaseButtonDefault class="mr-1 h-7" :button-style="ButtonStyle.Small" :disabled="!isPrevAvailable"
      @click.native="prevPage">
      <NuxtIcon name="chevron-left-solid" />
    </BaseButtonDefault>

    <BaseButtonDefault class="mr-1 h-7" :button-style="ButtonStyle.Small" :disabled="true">
      Page {{ props.page }} <span class="lowercase">of</span> {{ props.pageTotal }}
    </BaseButtonDefault>

    <BaseButtonDefault class="mr-1 h-7 inline-flex items-center" :button-style="ButtonStyle.Small"
      :disabled="!isNextAvailable" @click.native="nextPage">
      <NuxtIcon name="chevron-right-solid" />
    </BaseButtonDefault>

    <BaseButtonDefault class="h-7" :button-style="ButtonStyle.Small" :disabled="!isNextAvailable"
      @click.native="lastPage">
      Last
    </BaseButtonDefault>
  </div>
</template>
