import styles from '../styles/work.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'



export default function Work(){
  return (
    <div className={`${styles.color} ${styles.padding_6}`}>
      <h2><FontAwesomeIcon  icon={faStar} /> Work</h2>
      <p>作品です</p>
      <button><Link href="favicon.ico" target='_blank' rel='noopener'>ボタン</Link></button>

    </div>
  )
}
