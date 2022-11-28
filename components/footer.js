import styles from '../styles/footer.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter , faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
  return(
    <div className={`${styles.color}  ${styles.padding_3}`}>
      <div className={`${styles.d_flex} ${styles.center} ${styles.margin} ${styles.w_480}`  }>
        <a href='https://twitter.com/phihash' target='_blank' rel='noopener'><FontAwesomeIcon  icon={faTwitter} /></a>
        <a href='https://www.instagram.com/phihash_illust/' target='_blank' rel='noopener'><FontAwesomeIcon  icon={faInstagram} /></a>
        <a href='https://www.youtube.com/@user-vk1zk6qp2m' target='_blank' rel='noopener'><FontAwesomeIcon  icon={faYoutube} /></a>
      </div>
      <div className={`${styles.d_flex} ${styles.j_content} ${styles.margin}`}>
      <span>phihash-illust</span>
      <small> @phihash2022</small>
      </div>
    </div>
  )
}
