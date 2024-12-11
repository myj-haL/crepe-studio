import style from "./index.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { works } from "./works";

function Works () {
  return (
    <div className={style.container}>
      <h2 className={style.title}>Works</h2>

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
                <img alt="thumbnail" src={item.thumbnail} />
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