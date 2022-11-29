import styles from '../styles/character.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBlog, faCheese, faQuestion} from '@fortawesome/free-solid-svg-icons'

export default function Character(){
  return (
    <div className={`${styles.color} ${styles.padding_6}`}>
      <h2><FontAwesomeIcon  icon={faBlog} /> Character Profile</h2>
      <h3><FontAwesomeIcon  icon={faQuestion} /> なんでちゃん</h3>
      <h4>デビュー</h4>
      <p>2022年7月</p>
      <h4>性格</h4>
      <p>気まぐれで,のんびりしている</p>
      <h4>紹介</h4>
      <p><b>「!?」</b>型の耳をもつうさぎのキャラクター<br/>
         うさぎだけど基本的に雑食である。<br/>
      </p>

      <hr/>
      <h3><FontAwesomeIcon  icon={faCheese} /> ねずみ</h3>
      <h4>デビュー</h4>
      <p>2022年11月</p>
      <h4>性格</h4>
      <p>寂しがり屋,よく食べる</p>
      <h4>紹介</h4>
      <p>食いしん坊なねずみのキャラクター<br/>
         大好物はヨーグルト <br/>
      </p>

    </div>
  )
}
