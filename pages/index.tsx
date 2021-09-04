import Layout from "../components/Layout"
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
      <Layout pageTitle="Home Page">
        <div>
          <h1 className={styles['title-homepage']}>Welcome my bro</h1>
        </div>
      </Layout>
  )
}
