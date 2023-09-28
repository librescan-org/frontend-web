<script setup lang="ts">
import * as api_pb from '~~/proto/api_pb'
import { SearchType } from '~~/types/common'
import { useField, useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'

const { capitalize } = useUtils()
const router = useRouter()
const loading = ref<boolean>(false)
const errorMessage500 = useErrorMessage500()

const formValues = {
  searchString: ''
}

const validationSchema = toTypedSchema(
  z.object({
    searchString: z.string().min(1)
  })
)

const { handleSubmit, errors } = useForm({
  validationSchema,
  initialValues: formValues
})

const { value: searchString } = useField('searchString')

const onSubmit = handleSubmit(async (values, { resetForm }) => {
  if (!loading.value) {
    loading.value = true

    const { data, error } = await useLazyFetch<api_pb.GetSearchTermTypeResponse.AsObject>('/api/search/' + searchString.value)
    if (error.value) {
      if (error.value.statusCode === 404) {
        throw createError({ message: capitalize(error.value.data.message), statusCode: 404, fatal: true })
      } else {
        throw createError({ message: errorMessage500.value, statusCode: 500, fatal: true })
      }
    }

    if (data.value) {
      switch (Number(data.value.type)) {
        case SearchType.Address:
          router.push('/address/' + searchString.value)
          break
        case SearchType.Transaction:
          router.push('/tx/' + searchString.value)
          break
        case SearchType.BlockHash:
        case SearchType.BlockNumber:
          router.push('/block/' + searchString.value)
          break
      }
    }

    loading.value = false
    resetForm()
  }
})
</script>

<template>
  <div class="search-component">
    <BaseFormInput v-model="searchString" placeholder="Search by Address / Txn Hash / Block"
      @keyup.enter.native="onSubmit" />
    <BaseButtonForm :loading="loading" @click="onSubmit" />
  </div>
</template>
