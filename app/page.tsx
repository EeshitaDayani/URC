import styles from './page.module.css'
import SectionsWrapper from '@/src/components/SectionsWrapper'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>URC</h1>
      <SectionsWrapper />
    </main>
  )
}
