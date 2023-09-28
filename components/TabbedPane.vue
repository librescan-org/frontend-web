<script setup lang="ts">
import { TabbedPaneType } from '~~/types/common'

interface TabbedPaneProps {
  names?: string[]
}
const props = withDefaults(defineProps<TabbedPaneProps>(), {
  names: () => []
})

const emit = defineEmits(['updateTabbedPanes'])

const tabbedPanes = ref<TabbedPaneType[]>([])

const initTabbedPanes = () => {
  props.names.forEach((name: string, i: number) => {
    tabbedPanes.value = [...tabbedPanes.value, {
      id: i,
      name: name,
      active: i === 0 ?? true
    }]
  })
  emit('updateTabbedPanes', tabbedPanes.value)
}
initTabbedPanes()

const onChangeTab = (selectedTabbedPane: TabbedPaneType) => {
  tabbedPanes.value.forEach((tabbedPane: TabbedPaneType) => {
    tabbedPane.active = false
  })
  selectedTabbedPane.active = true

  emit('updateTabbedPanes', tabbedPanes.value)
}
</script>

<template>
  <div class="tabbed-pane-component">
    <div class="mb-4">
      <BaseButtonDefault v-for="(pane, index) in tabbedPanes" :key="index" class="mr-2" :class="{ 'button-active': pane.active }"
        @click="onChangeTab(pane)">
        {{ pane.name }}
      </BaseButtonDefault>
    </div>

    <div class="tab-content">
      <slot name="tabs" />
    </div>
  </div>
</template>
