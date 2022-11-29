import styles from '../styles/movie.module.css'
import Link from 'next/link'

export default function Movie(){
  return (
    <div className={`${styles.color} ${styles.padding_6}`}>
      <h2>Movie</h2>
      <div >
       <iframe className={styles.movie_css} src="https://www.youtube.com/embed/DGaRoCg4wjI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  )
}
