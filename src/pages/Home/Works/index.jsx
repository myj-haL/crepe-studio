import style from "./index.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { works } from "./works";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import useResponsive from "../../../common/hook/Responsive";

function Works () {
  const screenSize = useResponsive();

  useEffect(() => {
    AOS.init();
  }, [screenSize]);

  return (
    <div className={style.container} {...(screenSize < 1280 ? {
      'data-aos':"fade-up",
      'data-aos-offset':"100",
      'data-aos-duration':"1500"
    } : {})}>
      <h2 className={style.title} {...(screenSize >=1280 ? {
        'data-aos':"fade-up",
        'data-aos-offset':"100",
        'data-aos-duration':"1500"
      } : {})}>Works</h2>

      <div className={style.work_slide}>
        <Swiper
          slidesPerView={1.3}
          spaceBetween={18}
          centeredSlides={false}
          breakpoints={{
            1280:{
              // centeredSlides:true,
              slidesPerView:2.6
            }
          }}
          className={style.works_swipe}
        >
          {works.map((item) => (
            <SwiperSlide key={item.id} className={style.slide_item}>
              <a href={item.link}>
                <div className={style.inner}>
                  <img alt="thumbnail" src={item.thumbnail} />
                </div>
                <h3 className={style.name}>{item.pgName}</h3>
                <p className={style.category}>{item.pgCategory}</p>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Works;