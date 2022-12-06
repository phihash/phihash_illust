import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'; // スタイルをインポート
import 'swiper/css/pagination'; // スタイルをインポート

export default function Hoge () {
  return (
    <div>
          <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
    >
      <SwiperSlide><img src="http://placehold.jp/700x400.png?text=1" alt=""/></SwiperSlide>
      <SwiperSlide><img src="http://placehold.jp/700x400.png?text=2" alt=""/></SwiperSlide>
      <SwiperSlide><img src="http://placehold.jp/700x400.png?text=3" alt=""/></SwiperSlide>
      <SwiperSlide><img src="http://placehold.jp/700x400.png?text=4" alt=""/></SwiperSlide>
      ...
    </Swiper>
    </div>

  );
};
