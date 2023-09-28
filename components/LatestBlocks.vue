<script setup lang="ts">
import api_pb from '~~/proto/api_pb'
import dayjs from 'dayjs'

interface LatestBlocksProps {
  blocks: api_pb.Block.AsObject[] | null,
}

const props = defineProps<LatestBlocksProps>()

const blockDiffs = ref<number[]>([])

const initBlockDiffs = () => {
  if (props.blocks) {
    const dates: dayjs.Dayjs[] = []
    for (let i = 0; i < 7; i++) {
      if (props.blocks[i] === undefined) {
        continue
      }
      dates[i] = dayjs.unix(Number(props.blocks[i].timestamp))
    }

    for (let i = 0; i < dates.length - 1; i++) {
      const diff = dates[i].diff(dates[i + 1], 's', true)
      blockDiffs.value = [...blockDiffs.value, diff]
    }
  }
}
initBlockDiffs()
</script>

<template>
  <BaseCard>
    <template #headerTitle>Latest Blocks</template>

    <template #body>
      <div class="px-3">
        <template v-for="(block, index) in props.blocks" :key="index">
          <ListItem v-if="index < 6" :block="block" :block-diff="blockDiffs[index]" />
        </template>
      </div>
    </template>

    <template #footer>
      <NuxtLink to="/blocks" class="button button-sm block text-center">View all blocks</NuxtLink>
    </template>
  </BaseCard>
</template>
