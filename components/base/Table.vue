<script setup lang="ts">
import { TableValign } from '~/types/common'

interface TableProps {
  tdValign?: TableValign
}

const props = withDefaults(defineProps<TableProps>(), {
  tdValign: TableValign.Middle
})

const classObject = computed(() => {
  return {
    'table-valign-top': props.tdValign === TableValign.Top
  }
})

const slots = useSlots()
</script>


<template>
  <table class="table-component" :class="classObject">
    <thead v-if="slots.thead"><slot name="thead" /></thead>
    <tbody v-if="slots.tbody"><slot name="tbody" /></tbody>
  </table>
</template>
