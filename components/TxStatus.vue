<script setup lang="ts">
import * as api_pb from '~~/proto/api_pb'
import { LabelType } from '~~/types/common'

interface TxStatusProps {
  receiptstatus: api_pb.Transaction.AsObject['receiptstatus']
}

const props = defineProps<TxStatusProps>()
</script>

<template>
  <div>
    <BaseLabelDefault v-if="props.receiptstatus == 1" :type="LabelType.Success" :with-icon="true">
      Success
    </BaseLabelDefault>
    <BaseLabelDefault v-else-if="props.receiptstatus == 0" :type="LabelType.Danger" :with-icon="true">
      Fail
    </BaseLabelDefault>
  </div>
</template>
