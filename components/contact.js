import styles from '../styles/contact.module.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
export default function Contact(){
  return (
    <div className={`${styles.color} ${styles.padding_6}`}>
      <h2><FontAwesomeIcon icon={faEnvelope}/> Contact</h2>
      <p>TwitterやInstagramのDMで連絡をください</p>
    </div>
  )
}
