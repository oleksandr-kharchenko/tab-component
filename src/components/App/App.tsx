import styles from './App.module.scss'
import Tabs from 'components/Tabs/Tabs'

export default function App() {
  const tabs = [
    {
      key: 'first-tab',
      name: 'First Tab',
      component: <p>First Tab</p>
    },
    {
      key: 'second-tab',
      name: 'Second Tab',
      component: <p>Second Tab</p>
    }
  ]

  return (
    <div className={styles.app}>
      <Tabs tabs={tabs} />
    </div>
  )
}