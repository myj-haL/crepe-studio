import React, { useEffect, useRef } from 'react';
import style from './index.module.css';
import useResponsive from '../../../common/hook/Responsive';
import { service } from './service';
import AOS from 'aos';
import 'aos/dist/aos.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Service() {
  const screenSize = useResponsive();

  useEffect(() => {
    AOS.init();
  }, [screenSize]);

  return (
    <div className={style.container}>
      {screenSize >= 1280 ? <PcService /> : <MobileService />}
    </div>
  );
}

export default Service;

export function MobileService() {
  return (
    <div data-aos="fade-up" data-aos-offset="100" data-aos-duration="2000">
      <h2 className={style.title}>
        Service
      </h2>

      <div className={style.service_list}>
        {service.map((item) => (
          <div
            className={style.list_item}
            key={item.id}
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-duration="2000"
          >
            <h3 className={style.item_title}>{item.title}</h3>
            <p className={style.item_desc}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PcService() {
  const wrapEl = useRef(null);
  const targetEls = useRef([]);

  setTimeout(() => {
    ScrollTrigger.refresh(); // 페이지 크기나 레이아웃이 변경될 때 호출
  }, 0)

  useGSAP(
    () => {
      const targetEl1 = targetEls.current[0];
      const targetEl2 = targetEls.current[1];
      const targetEl3 = targetEls.current[2];

      gsap
        .timeline({
          defaults: {
            duration: 1,
          },
          scrollTrigger: {
            trigger: wrapEl.current,
            scrub: 1,
            start: 'top top',
            end: 'bottom top',
            pin: true,
            onEnter: () => {
              setTimeout(() => {
                ScrollTrigger.refresh(); // 페이지 크기나 레이아웃이 변경될 때 호출
              }, 0)
            },
          },
        })
        .from(targetEl1, { opacity: 0, y: 20 })
        .to(targetEl1, { opacity: 1, y: 0 }, "+=0.5")
        .to(targetEl1, { opacity: 0, y: -20 }, "+=0.5")
        .from(targetEl2, { opacity: 0, y: 20 }, "+=0.5")
        .to(targetEl2, { opacity: 1, y: 0 }, "+=0.5")
        .to(targetEl2, { opacity: 0, y: -20 }, "+=0.5")
        .from(targetEl3, { opacity: 0, y: 20 }, "+=0.5")
        .to(targetEl3, { opacity: 1, y: 0 }, "+=0.5");
    },
    { scope: wrapEl.current }
  );

  return (
    <div ref={wrapEl} className={style.animation_dom}>
      <h2 className={style.title}>
        Service
      </h2>

      <div className={style.service_list}>
        {service.map((item, index) => (
          <div className={style.list_item} key={item.id}>
            <div className={style.inner_box} ref={(el) => (targetEls.current[index] = el)}>
              <h3 className={style.item_title}>{item.title}</h3>
              <p className={style.item_desc}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
