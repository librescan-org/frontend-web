<script setup lang="ts">
import { HeaderType, LogoType } from '~~/types/common'

const logo = useLogo()
const logoDark = useLogoDark()
const route = useRoute()
const headerType = ref<HeaderType>(HeaderType.Simple)
if (route.name !== 'index') {
  headerType.value = HeaderType.WithSearch
}

const classObject = computed(() => {
  return {
    'h-18': headerType.value === HeaderType.Simple,
    'h-18 max-sm:h-auto max-sm:py-4': headerType.value === HeaderType.WithSearch,
  }
})

watch(() => route.name, () => {
  if (route.name !== 'index') {
    headerType.value = HeaderType.WithSearch
  } else {
    headerType.value = HeaderType.Simple
  }
})
</script>

<template>
  <header class="bg-white shadow shadow-neutral-300/20" :class="classObject">
    <div class="container flex flex-wrap items-center justify-between h-full">
      <NuxtLink to="/" class="inline-flex items-start"
        :class="{ 'max-sm:pb-2': headerType === HeaderType.WithSearch }">
        <img v-if="logo === LogoType.Default" class="h-11" src="@/assets/images/logo-librescan-demo-dark.svg" alt="LibreScan" />
        <img v-else-if="logo === LogoType.QAN" class="h-11" src="@/assets/images/logo-qanscan-private-dark.svg" alt="QANscan" />
        <img v-else class="h-11" :src="logoDark" alt="LibreScan" />
      </NuxtLink>

      <Search v-if="headerType === HeaderType.WithSearch" class="sm:max-lg:w-80 lg:max-xl:w-96 transition duration-600" />
    </div>
  </header>
</template>
