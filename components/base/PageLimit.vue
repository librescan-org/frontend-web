<script setup lang="ts">
const emit = defineEmits(['onChangeLimit'])

const { limit, limitOptions } = usePagination()

const onChangeLimit = () => {
  emit('onChangeLimit', limit.value)
}
</script>

<template>
  <div class="flex items-center">
    <span>Show</span>
    <select v-model="limit" class="bg-white border border-neutral-200 rounded mx-1.5 py-1 px-2" @change="onChangeLimit">
      <option v-for="(option, index) in limitOptions" :key="index" :value="option">{{ option }}</option>
    </select>
    <span>Records</span>
  </div>
</template>
