import { ReactNode } from 'react'
import styles from './Tabs.module.scss'
import { useTabs } from 'hooks/useTabs'

type Tab = {
  key: string,
  name: string,
  component: ReactNode
}

type TabsProps = {
  tabs: Tab[]
}

export default function Tabs({ tabs }: TabsProps) {
  const { currentTabIndex, onTabChange, currentTab } = useTabs(tabs)

  const selectTab = (index: number) => {
    return () => {
      onTabChange(index)
    }
  }

  const getTabButtonClassName = (index: number) => {
    let className = styles.tabButton

    if (index === currentTabIndex) {
      className += ` ${styles.current}`
    }

    return className
  }

  return (
    <div>
      <section className={styles.tabControls}>
        {tabs.map((tab, index) => (
          <button
            key={tab.key}
            className={getTabButtonClassName(index)}
            onClick={selectTab(index)}
          >
            {tab.name}
          </button>
        ))}
      </section>
      {currentTab.component}
    </div>
  )
}