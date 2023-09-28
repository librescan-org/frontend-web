export const usePagination = () => {
  const page = ref<number>(1)
  const pageTotal = ref<number>(0)
  const limit = ref<number>(25)
  const limitOptions = ref<number[]>([10, 25, 50, 100])
  const totalCount = ref<number>(0)

  const updatePage = async (newPage: number): Promise<void> => {
    page.value = newPage
  }

  const updateLimit = async (newLimit: number): Promise<void> => {
    page.value = 1
    limit.value = newLimit
    setPageTotal()
  }

  const setPageTotal = () => {
    pageTotal.value = Math.ceil(totalCount.value / limit.value)
  }

  return {
    page,
    pageTotal,
    limit,
    limitOptions,
    totalCount,
    updatePage,
    updateLimit,
    setPageTotal
  }
}
