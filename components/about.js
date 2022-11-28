import styles from '../styles/about.module.css'


export default function About(){
  return (
    <div className={`${styles.color} ${styles.padding_6}`}>
      <h2>About</h2>
      <p>私についてです</p>
    </div>
  )
}
