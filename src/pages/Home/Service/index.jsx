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
    <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">
      <h2 className={style.title}>
        Service
      </h2>

      <div className={style.service_list}>
        {service.map((item) => (
          <div
            className={style.list_item}
            key={item.id}
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration={item.duration}
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
  const wrapEl = useRef();
  const targetEls = useRef([]);

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
            start: 'top +=90px',
            end: '+=2000',
            pin: true,
          },
        })
        .from(targetEl1, { opacity: 0, y: 20 })
        .to(targetEl1, { opacity: 1, y: 0 }, "+=0.5")
        .to(targetEl1, { opacity: 0, y: -20 }, "+=0.5")
        .from(targetEl2, { opacity: 0, y: 20 }, "+=0.5")
        .to(targetEl2, { opacity: 1, y: 0 }, "+=0.5")
        .to(targetEl2, { opacity: 0, y: -20 }, "+=0.5")
        .from(targetEl3, { opacity: 0, y: 20 }, "+=0.5")
        .to(targetEl3, { opacity: 1, y: 0 }, "+=0.5")
        // .to(targetEl3, { opacity: 0, y: -20 }, "+=0.5");
    },
    { scope: wrapEl.current }
  );

  return (
    <div ref={wrapEl} className={style.animation_dom}>
      <h2 className={style.title} data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">
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
