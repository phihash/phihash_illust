import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide  } from 'swiper/react';


// Import Swiper styles
import styles from '../styles/wallpaper.module.css'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Wallpaper () {
  return (
    <div className={`${styles.color}`}>
      <Swiper
      spaceBetween={50}
      loop={true}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[Navigation, Pagination] }
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide><img className={ `${styles.img_css}`} src="http://placehold.jp/700x400.png?text=1" alt=""/></SwiperSlide>
      <SwiperSlide><img className={ `${styles.img_css}`} src="http://placehold.jp/700x400.png?text=2" alt=""/></SwiperSlide>
      <SwiperSlide><img className={ `${styles.img_css}`} src="http://placehold.jp/700x400.png?text=3" alt=""/></SwiperSlide>
      <SwiperSlide><img className={ `${styles.img_css}`} src="http://placehold.jp/700x400.png?text=4" alt=""/></SwiperSlide>
    </Swiper>
    </div>

  );
};
