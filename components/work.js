import styles from '../styles/work.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'



export default function Work(){
  return (
    <div className={`${styles.color} ${styles.padding_6} ${styles.color}`}>
      <h2><FontAwesomeIcon  icon={faStar} /> Work</h2>
      <h3>壁紙</h3>
      <button><Link href="2022-11-29.PNG" target='_blank' rel='noopener'>スマホの壁紙</Link></button>
      <h3>LINEスタンプ</h3>

    </div>
  )
}
