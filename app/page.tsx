import styles from './page.module.css'
import SectionsWrapper from '@/src/components/SectionsWrapper'
import NavBar from '@/src/components/Navbar'

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar />
      <SectionsWrapper />
    </main>
  )
}
