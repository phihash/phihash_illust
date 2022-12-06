
import styles from '../styles/hero.module.css'
import hero404 from '../public/404.PNG'


export default function Custom404() {
  return (
    <div  className={` ${styles.padding_6}`}>
      <img src={hero404.src}/>
      <br/>
      <a href="/">Pageへ</a>
    </div>
  )
}
