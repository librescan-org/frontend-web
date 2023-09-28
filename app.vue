<script setup lang="ts">
import { LogoType } from '~~/types/common'
import * as api_pb from '~~/proto/api_pb'

const config = useRuntimeConfig()

const logo = useLogo()
if (config.app.logoType) {
  logo.value = config.app.logoType
}

const logoLight = useLogoLight()
if (config.app.logoLight) {
  logoLight.value = config.app.logoLight
}

const logoDark = useLogoDark()
if (config.app.logoDark) {
  logoDark.value = config.app.logoDark
}

const token = useToken()
if (config.app.tokenSymbol) {
  token.value = config.app.tokenSymbol
}

const decimals = useDecimals()
if (config.app.tokenDecimals) {
  decimals.value = config.app.tokenDecimals
}

const isMainnet = useIsMainnet()
const { data } = await useFetch<api_pb.BlockResponse.AsObject>('/api/block/number/0')
if (data.value && data.value.block !== undefined) {
  if (data.value.block.hash === '0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3') {
    isMainnet.value = true
  }
}

const title = ref<string>()
const description = ref<string>()
if (logo.value === LogoType.QAN) {
  title.value = 'QANscan | QANplatform Blockchain Explorer'
  description.value = 'QANscan is an analytics tool that helps people to search the QAN blockchain platform for transactions, addresses, and other activities.'
} else {
  title.value = 'LibreScan | QANplatform Blockchain Explorer'
  description.value = 'LibreScan is an analytics tool that helps people to search the QAN blockchain platform for transactions, addresses, and other activities.'
}  

useSeoMeta({
  title: title.value,
  description: description.value
})

useHead({
  htmlAttrs: {
    lang: 'en'
  }
})
</script>

<template>
  <div>
    <NuxtLayout>
      <div class="min-h-screen relative">
        <LoadingIndicator color="#00A6D4" />
        <AppHeader />
        <NuxtPage />
        <AppFooter />
      </div>
    </NuxtLayout>
  </div>
</template>
