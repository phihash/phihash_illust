import styles from '../styles/manga.module.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook} from '@fortawesome/free-solid-svg-icons'
export default function Manga(){
  return (
    <div className={`${styles.color} ${styles.padding_6}`}>
      <h2 className={`${styles.section_title}`}><FontAwesomeIcon icon={faBook}/> Manga</h2>
      <blockquote class="twitter-tweet"><p lang="und" dir="ltr">🥱 <a href="https://t.co/aCB0Tsu3oU">pic.twitter.com/aCB0Tsu3oU</a></p>&mdash; phihash (@phihash) <a href="https://twitter.com/phihash/status/1599006235688595456?ref_src=twsrc%5Etfw">December 3, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

    </div>
  )
}


