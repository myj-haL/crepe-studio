import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import style from './index.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useResponsive from '../../../common/hook/Responsive';
import { useEffect, useState } from 'react';
import { process } from './process';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Thumbs, Autoplay } from 'swiper/modules';

function Process() {
  const screenSize = useResponsive();

  useEffect(() => {
    AOS.init();
  }, [screenSize]);

  return (
    // <div className={style.container} {...(screenSize < 1280 ? { 'data-aos': 'fade-up' } : {})} data-aos-offset="100" data-aos-duration="2000">
    <div className={style.container} data-aos="fade-up" data-aos-offset="100" data-aos-duration="1000">
      <h2 className={style.title}>
        Process
      </h2>
      {screenSize >= 1280 ? <PcProcess /> : <MobileProcess />}
    </div>
  );
}

export default Process;

export function MobileProcess() {
  return (
    <div className={style.process_list_wrap}>
      {process.map((item) => (
        <div className={style.list_item} key={item.id} data-aos="fade-up" data-aos-offset="100" data-aos-duration="1000">
          <img alt="process img" src={item.img} />
          <div className={style.contents}>
            <h3 className={style.item_title}>
              <p>{item.num}</p>
              <p>{item.title}</p>
            </h3>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function PcProcess() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={style.process_list}>
      <Swiper
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Thumbs, Autoplay]}
        slidesPerView={'auto'}
        className={style.thumb_swipe}
        allowTouchMove={false}
        loop={true}
        spaceBetween={10}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {process.map((item) => (
          <SwiperSlide key={item.id} className={style.img_box}>
            <img alt="process img" src={item.img} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        slidesPerView={'auto'}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs, Autoplay]}
        className={style.text_swipe}
        allowTouchMove={false}
        touchRatio={false}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {process.map((item) => (
          <SwiperSlide key={item.id} className={style.text_box}>
            <div className={style.left_title}>
              <p>{item.num}</p>
              <p>{item.title}</p>
            </div>
            <div className={style.right_title}>
              <p>{item.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
