import styles from '../styles/header.module.css'


export default function Header(){
  return (
    <div className={`${styles.color} ${styles.padding_6}`}>
      <h2><a href="/">Phihash-illust</a> </h2>
    </div>
  )
}
