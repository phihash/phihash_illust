import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Character from '../components/character';
import Movie from '../components/movie';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>phihash illust</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>


    <Character personality={"s"}></Character>
    <Character></Character>
    <Character></Character>
    <Character></Character>
    <Movie></Movie>



      </main>


    </div>
  )
}
