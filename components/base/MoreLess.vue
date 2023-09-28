<script setup lang="ts">
const container = ref()
const isVisible = ref(false)

const onToggle = (event: any) => {
  if (process.client) {
    event.preventDefault()

    if (!container.value.classList.contains('active')) {
      container.value.addEventListener('transitionend', function () {
        container.value.style.overflow = 'inherit'
      }, {
        once: true
      })

      container.value.classList.add('active')
      container.value.style.height = 'auto'

      let height = container.value.clientHeight + 'px'

      container.value.style.height = '0px'

      setTimeout(function () {
        container.value.style.height = height
        isVisible.value = true
      }, 0)
    } else {
      isVisible.value = false

      container.value.style.height = '0px'
      container.value.style.overflow = 'hidden'

      container.value.addEventListener('transitionend', function () {
        container.value.classList.remove('active')
      }, {
        once: true
      })
    }
  }
}

const onWindowResize = () => {
  if (!container.value) {
    return
  }

  isVisible.value = false

  container.value.style.height = '0px'
  container.value.style.overflow = 'hidden'

  container.value.classList.remove('active')
}

onMounted(() => {
  if (process.client) {
    window.addEventListener('resize', onWindowResize)
  }
})

onBeforeUnmount(() => {
  if (process.client) {
    window.removeEventListener('resize', onWindowResize)
  }
})
</script>

<template>
  <div class="more-less-component">
    <div class="toggle-container transition-[height]" ref="container">
      <slot />
    </div>
    <div class="my-3 mx-3">
      <span class="inline-flex items-center cursor-pointer text-qan-blue-400 select-none" @click="onToggle">
        <span v-if="!isVisible">Click to see more</span>
        <span v-else>Click to see less</span>
        <NuxtIcon v-if="!isVisible" name="chevron-down-solid" class="ml-1" />
        <NuxtIcon v-else name="chevron-up-solid" class="ml-1" />
      </span>
    </div>
  </div>
</template>
