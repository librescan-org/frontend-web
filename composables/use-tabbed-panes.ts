import { TabbedPaneType } from '~~/types/common'

export const useTabbedPanes = (initialNames: string[]) => {
  const tabbedPaneNames = ref<string[]>([])
  tabbedPaneNames.value = initialNames

  const tabbedPanes = ref<TabbedPaneType[]>([])

  const updateTabbedPanes = async (newTabbedPanes: TabbedPaneType[]) => {
    tabbedPanes.value = newTabbedPanes
  }

  return {
    tabbedPaneNames,
    tabbedPanes,
    updateTabbedPanes
  }
}
