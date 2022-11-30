import styles from '../styles/header.module.css'


export default function Header(){
  return (
    <div className={`${styles.color} ${styles.padding_6} ${styles.section_title}`}>
      <h2><a href="/">Phihash-illust</a> </h2>
    </div>
  )
}
