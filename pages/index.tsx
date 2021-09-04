import Header from "../components/Header"
import Footer from "../components/Footer"
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Header/>
      <h1 className={styles['title-homepage']}>Welcome my bro</h1>
      <Footer/>
    </div>
  )
}
