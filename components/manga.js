import styles from '../styles/manga.module.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook} from '@fortawesome/free-solid-svg-icons'
export default function Manga(){
  return (
    <div className={`${styles.color} ${styles.padding_6}`}>
      <h2 className={`${styles.section_title}`}><FontAwesomeIcon icon={faBook}/> Manga</h2>
      <blockquote class="twitter-tweet"><p lang="und" dir="ltr">🥱<a href="https://twitter.com/hashtag/%E6%BC%AB%E7%94%BB%E3%81%8C%E3%82%88%E3%82%81%E3%82%8B%E3%83%8F%E3%83%83%E3%82%B7%E3%83%A5%E3%82%BF%E3%82%B0?src=hash&amp;ref_src=twsrc%5Etfw">#漫画がよめるハッシュタグ</a> <a href="https://twitter.com/hashtag/%E6%BC%AB%E7%94%BB%E3%81%8C%E8%AA%AD%E3%82%81%E3%82%8B%E3%83%8F%E3%83%83%E3%82%B7%E3%83%A5%E3%82%BF%E3%82%B0?src=hash&amp;ref_src=twsrc%5Etfw">#漫画が読めるハッシュタグ</a> <a href="https://t.co/UhPalo3CdO">pic.twitter.com/UhPalo3CdO</a></p>&mdash; phihash (@phihash) <a href="https://twitter.com/phihash/status/1599010601652846592?ref_src=twsrc%5Etfw">December 3, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

    </div>
  )
}


