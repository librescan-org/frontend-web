<script setup lang="ts">
import { LogoType } from '~~/types/common'

const logo = useLogo()
const logoDark = useLogoDark()
const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <header class="bg-white shadow shadow-neutral-300/20 h-18">
    <div class="container flex flex-wrap items-center justify-between h-full">
      <span class="inline-flex items-start cursor-pointer" @click="handleError">
        <img v-if="logo === LogoType.Default" class="h-11" src="@/assets/images/logo-librescan-demo-dark.svg" alt="LibreScan" />
        <img v-else-if="logo === LogoType.QAN" class="h-11" src="@/assets/images/logo-qanscan-private-dark.svg" alt="QANscan" />
        <img v-else class="h-11" :src="logoDark" alt="LibreScan" />
      </span>
    </div>
  </header>
</template>
