import { useState } from 'react'

export const useTabs = <T>(tabs: T[]) => {
  const [currentTabIndex, setCurrentTabIndex] = useState<number>(0)

  const currentTab = tabs[currentTabIndex]

  const onTabChange = (index: number) => {
    setCurrentTabIndex(index)
  }

  return { currentTabIndex, onTabChange, currentTab }
}