<script setup lang="ts">
import { LogoType } from '~~/types/common'

interface FooterProps {
  errorPage?: boolean
}
const props = withDefaults(defineProps<FooterProps>(), {
  errorPage: false
})

const logo = useLogo()
const logoLight = useLogoLight()
const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <footer class="absolute bottom-0 left-0 right-0 bg-qan-black-900">
    <div class="container">
      <div class="pt-8 pb-4 border-b border-neutral-200/20">
        <div class="grid grid-cols-12 gap-6">
          <div class="col-span-6 max-lg:col-span-12 lg:col-span-4 xl:col-span-5 2xl:col-span-6">
            <div class="flex items-start">
              <NuxtLink v-if="!errorPage" to="/" class="inline-flex items-start">
                <img v-if="logo === LogoType.Default" class="h-12" src="@/assets/images/logo-librescan-demo-light.svg"
                  alt="LibreScan" />
                <img v-else-if="logo === LogoType.QAN" class="h-12" src="@/assets/images/logo-qanscan-private-light.svg"
                  alt="QANscan" />
                <img v-else class="h-12" :src="logoLight" alt="LibreScan" />
              </NuxtLink>
              <span v-else class="inline-flex items-start cursor-pointer" @click="handleError">
                <img v-if="logo === LogoType.Default" class="h-12" src="@/assets/images/logo-librescan-demo-light.svg"
                  alt="LibreScan" />
                <img v-else-if="logo === LogoType.QAN" class="h-12" src="@/assets/images/logo-qanscan-private-light.svg"
                  alt="QANscan" />
                <img v-else class="h-12" :src="logoLight" alt="LibreScan" />
              </span>
            </div>
          </div>

          <!--
          <div class="col-span-6 max-lg:col-span-12 lg:col-span-8 xl:col-span-7 2xl:col-span-6">
            <div class="grid grid-cols-3 gap-6 max-sm:grid-cols-2">
              <div v-for="i in 3" :key="i" class="mb-2 max-sm:mb-0">
                <div class="border-b border-b-neutral-200/20 mb-1 pb-2">
                  <a href="#" class="text-sm text-white">Heading #{{ i }}</a>
                </div>
                <ul>
                  <li class="mb-1"><a href="#" class="text-xs text-white/70 hover:text-white transition">Link #1</a>
                  </li>
                  <li class="mb-1"><a href="#" class="text-xs text-white/70 hover:text-white transition">Link #2</a>
                  </li>
                  <li class="mb-1"><a href="#" class="text-xs text-white/70 hover:text-white transition">Link #3</a>
                  </li>
                  <li class="mb-1"><a href="#" class="text-xs text-white/70 hover:text-white transition">Link #4</a>
                  </li>
                  <li class="mb-1"><a href="#" class="text-xs text-white/70 hover:text-white transition">Link #5</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          -->
        </div>
      </div>

      <div class="py-6">
        <p class="text-xs text-white">
          <span>{{ logo === LogoType.QAN ? 'QANscan' : 'LibreScan' }}</span>
          <span> &copy;2023 - by <a href="https://qanplatform.com" target="_blank">QANplatform</a></span>
        </p>
      </div>
    </div>
  </footer>
</template>
