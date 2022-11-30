import styles from '../styles/about.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'

export default function About(){
  return (
    <div className={`${styles.color} ${styles.padding_6}`}>
      <h2 className={`${styles.section_title}`}><FontAwesomeIcon  icon={faUser} /> About</h2>
      <p>phihashについて</p>
      <div>
        <h3>phihash</h3>
        <p>1998年生まれ 関西出身　<br/>
        ゆるいキャラクターを描いてます。</p>
        <h3>そのほか</h3>
        <p>現在は大学生です。<br/>
        イラストを描く以外にプログラミングをしています。JavaScriptという言語をメインに触っています。<br/>
        他にはINIや原因は自分にある。というアイドルが好きです。
        </p>
      </div>
    </div>
  )
}
