import styles from '../styles/contact.module.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
export default function Contact(){
  return (
    <div className={`${styles.color} ${styles.padding_6}`}>
      <hr/> <br/>
      <h2 className={`${styles.section_title}`}><FontAwesomeIcon icon={faEnvelope}/> <br/> <br/> Contact</h2>
      <p>お仕事お待ちしております。</p>
      <p>お手数ですが、TwitterやInstagramのDMで連絡をください</p>
    </div>
  )
}
