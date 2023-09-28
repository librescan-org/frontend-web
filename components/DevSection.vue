<script setup lang="ts">
interface DevSectionProps {
  label: string
  pre: any
}
const props = defineProps<DevSectionProps>()
</script>

<template>
  <DevOnly>
    <section>
      <div class="container h-[400px] overflow-scroll">
        <p>{{ props.label }}:</p>
        <pre>{{ props.pre }}</pre>
      </div>
    </section>
  </DevOnly>
</template>
