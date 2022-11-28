import styles from '../styles/header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons'
import { faTwitter} from '@fortawesome/free-brands-svg-icons'


export default function Sns(){
  return(
    <div className={` ${styles.padding_6}`}>
      <h2>SNS</h2>
      <h3>Twitter</h3>
      <FontAwesomeIcon icon={faHouseChimney} />
      <FontAwesomeIcon icon={faTwitter} />
      <h3>Instagram</h3>
    </div>
  )
}
