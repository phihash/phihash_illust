import styles from '../styles/work.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'
import { Navigation, Pagination ,EffectCoverflow  } from 'swiper';
import { Swiper, SwiperSlide  } from 'swiper/react';
// Import Swiper styles

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';



export default function Work(){
  return (
    <div className={`${styles.color} ${styles.padding_6} `}>
      <h2 className={`${styles.section_title}`}><FontAwesomeIcon  icon={faStar} /> Work</h2>
      <h2>壁紙</h2>
      <div className={`${styles.swiper_box}`}>
      <Swiper
      loop={true}

      slidesPerView={2}
      modules={[Navigation, Pagination,EffectCoverflow] }
      navigation
      pagination={{ clickable: true }}
      centeredSlides
    >
      <SwiperSlide><img className={ `${styles.img_css}`} src="2022-11-29.PNG" alt=""/></SwiperSlide>
      <SwiperSlide><img className={ `${styles.img_css}`} src="2022-11-29.PNG" alt=""/></SwiperSlide>
      <SwiperSlide><img className={ `${styles.img_css}`} src="2022-11-29.PNG" alt=""/></SwiperSlide>
      <SwiperSlide><img className={ `${styles.img_css}`} src="2022-11-29.PNG" alt=""/></SwiperSlide>
      <SwiperSlide><img className={ `${styles.img_css}`} src="2022-11-29.PNG" alt=""/></SwiperSlide>
      <SwiperSlide><img className={ `${styles.img_css}`} src="2022-11-29.PNG" alt=""/></SwiperSlide>
      <SwiperSlide><img className={ `${styles.img_css}`} src="2022-11-29.PNG" alt=""/></SwiperSlide>
      <SwiperSlide><img className={ `${styles.img_css}`} src="2022-11-29.PNG" alt=""/></SwiperSlide>
      <SwiperSlide><img className={ `${styles.img_css}`} src="2022-11-29.PNG" alt=""/></SwiperSlide>
    </Swiper>
      </div>


      <button><Link href="2022-11-29.PNG" target='_blank' rel='noopener'>スマホの壁紙</Link></button>
      <h2>LINEスタンプ</h2>

    </div>
  )
}







