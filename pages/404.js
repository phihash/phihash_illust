
import styles from '../styles/hero.module.css'

export default function Custom404() {
  return (
    <div  className={` ${styles.padding_6}`}>
      <img src="404.PNG"/>
      <br/>
      <a href="/">Pageへ</a>
    </div>
  )
}
