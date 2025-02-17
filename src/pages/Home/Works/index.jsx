import style from './index.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect } from 'react';
import useResponsive from '../../../common/hook/Responsive';

function Works() {
  const [worksData, setWorksData] = useState([]);
  const screenSize = useResponsive();

  // API에서 데이터 fetch
  useEffect(() => {
    // fetch API 호출 (예시 URL)
    const fetchWorks = async () => {
      try {
        const API_URL = process.env.REACT_APP_API_URL;
        const response = await fetch(`${API_URL}/content/list`); // API 엔드포인트 호출 (이 부분을 실제 API URL로 변경)
        if (response.ok) {
          const data = await response.json();
          setWorksData(data.slice(0, 5));
        } else {
          console.error('Error fetching data');
        }
      } catch (error) {
        console.error('Error fetching works data:', error);
      }
    };

    fetchWorks();
  }, []);

  // AOS 초기화
  useEffect(() => {
    AOS.init();
  }, [screenSize]);

  return (
    <div
      className={style.container}
      {...(screenSize < 1280
        ? {
            'data-aos': 'fade-up',
            'data-aos-offset': '100',
            'data-aos-duration': '1500',
          }
        : {})}
    >
      <h2
        className={style.title}
        {...(screenSize >= 1280
          ? {
              'data-aos': 'fade-up',
              'data-aos-offset': '100',
              'data-aos-duration': '1500',
            }
          : {})}
      >
        Works
      </h2>

      <div className={style.work_slide}>
        <Swiper
          slidesPerView={1.3}
          spaceBetween={18}
          centeredSlides={false}
          breakpoints={{
            1280: {
              slidesPerView: 2.9,
            },
          }}
          className={style.works_swipe}
        >
          {worksData.map((item) => (
            <SwiperSlide key={item.uuid} className={style.slide_item}>
              <a href={item.link}>
                <div className={style.inner}>
                  <img alt="thumbnail" src={item.mainImage} />
                </div>
                <h3 className={style.name}>{item.title}</h3>
                <p className={style.category}>
                  {item.services.join(', ')}
                </p>{' '}
                {/* 서비스 배열 표시 */}
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Works;
