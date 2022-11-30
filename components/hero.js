import styles from '../styles/hero.module.css'


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
export default function Hero(){
  return (
    <div className={`${styles.color} ${styles.padding_6}`}>
      <img src="hero.PNG" className={styles.img_css} />
    </div>
  )
}
