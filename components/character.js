import styles from '../styles/character.module.css'


export default function Character(){
  return (
    <div className={`${styles.color} ${styles.padding_6}`}>
      <h2>Character</h2>
      <h3>なんでちゃん</h3>
      <p>うさぎのキャラクターです</p>
    </div>
  )
}
