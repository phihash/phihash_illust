import styles from '../styles/character.module.css'


export default function Character(){
  return (
    <div className={`${styles.color} ${styles.padding_6}`}>
      <h2>Character Profile</h2>
      <h3>なんでちゃん</h3>
      <h4>デビュー</h4>
      <p>2022年7月</p>
      <h4>性格</h4>
      <p>気まぐれで,のんびりしている</p>
      <h4>紹介</h4>
      <p><b>「!?」</b>型のみみをもつうさぎのキャラクター<br/>
         うさぎだけど基本的に雑食である。<br/>
      </p>

    </div>
  )
}
