<script setup lang="ts">
interface BaseCardProps {
  border?: boolean
}

const props = withDefaults(defineProps<BaseCardProps>(), {
  border: true
})

const slots = useSlots()

const borderClasses = ref<string>('rounded-lg border border-neutral-200 shadow-custom')
</script>

<template>
  <div class="bg-white break-words" :class="props.border ? borderClasses : ''">
    <div v-if="slots.headerTitle" class="border-b border-neutral-200 p-3 text-sm font-medium">
      <slot name="headerTitle" />
    </div>

    <div v-if="slots.header" class="border-b border-neutral-200 p-3">
      <slot name="header" />
    </div>

    <div>
      <slot name="body" />
    </div>

    <div v-if="slots.footer" class="border-t border-neutral-200 p-3">
      <slot name="footer" />
    </div>
  </div>
</template>
