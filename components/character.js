import styles from '../styles/character.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBlog, faCakeCandles, faHandHolding,} from '@fortawesome/free-solid-svg-icons'
import { faGratipay } from '@fortawesome/free-brands-svg-icons'

export default function Character(){
  return (
    <div className={`${styles.color} ${styles.padding_6}`}>
      <h2 className={`${styles.section_title}`}><FontAwesomeIcon  icon={faBlog} /> Character Profile</h2>

      <div className={styles.padding_top_1}>

      <h3> なんでちゃん</h3>
      <h4><FontAwesomeIcon icon={faCakeCandles} /> デビュー</h4>
      <p>2022年7月</p>
      <h4><FontAwesomeIcon icon={faGratipay} /> 性格</h4>
      <p>気まぐれで,のんびりしている</p>
      <h4><FontAwesomeIcon icon={faHandHolding} /> 紹介</h4>
      <p><b>「!?」</b>型の耳をもつうさぎのキャラクター<br/>
         うさぎだけど基本的に雑食である。<br/>
      </p>
      </div>

      <hr className={styles.hr }/>
      <div className={styles.padding_top_1}>
        <h3>はげます</h3>
        <h4><FontAwesomeIcon icon={faCakeCandles} /> デビュー</h4>
        <p>2022年7月</p>
        <h4><FontAwesomeIcon icon={faGratipay} /> 性格</h4>
        <p>めげない</p>
        <h4><FontAwesomeIcon icon={faHandHolding} /> 紹介</h4>
        <p>自分が励まされたいのに、みんなを応援する<br/>
          月曜日がとても嫌い<br/>
        </p>
      </div>


      <hr className={styles.hr}/>
      <div className={styles.padding_top_1}>
        <h3>しろはむ</h3>
        <h4><FontAwesomeIcon icon={faCakeCandles} /> デビュー</h4>
        <p>2022年11月</p>
        <h4><FontAwesomeIcon icon={faGratipay} /> 性格</h4>
        <p>寂しがり屋,よく食べる</p>
        <h4><FontAwesomeIcon icon={faHandHolding} /> 紹介</h4>
        <p>食いしん坊なねずみのキャラクター<br/>
          大好物はヨーグルト <br/>
        </p>
      </div>

      <hr className={styles.hr}/>
      <div className={styles.padding_top_1}>
        <h3>だるねこ</h3>
        <h4><FontAwesomeIcon icon={faCakeCandles} /> デビュー</h4>
        <p>2022年12月</p>
        <h4><FontAwesomeIcon icon={faGratipay} /> 性格</h4>
        <p>めんどくさがり</p>
        <h4><FontAwesomeIcon icon={faHandHolding} /> 紹介</h4>
        <p>何事にもやる気が起きないねこちゃん<br/>
           好きなことだけをしていたい <br/>
        </p>
      </div>




    </div>
  )
}
