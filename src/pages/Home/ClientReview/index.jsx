import { useRef, useEffect } from 'react';
import { reviewList } from './reviewList';
import style from './index.module.css';
import iconPlus from 'images/common/icon-plus.svg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function ClientReview() {
  const countEls = useRef([]);
  const countContainer = useRef();

  useEffect(() => {
    const anim = reviewList.map((item, index) => {
      const countEl = countEls.current[index];
      const round = index === 2 ? 0.1 : 1;

      return gsap.to(countEl, {
        innerHTML: gsap.utils.snap(round, item.count),
        snap: {
          innerHTML: round,
        },
        duration: 4,
        scrollTrigger: {
          trigger: countContainer.current,
          start: 'bottom bottom',
          end: 'top 10%',
        },
      });
    }, []);

    return () => {
      anim.forEach((a) => a.kill());
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className={style.container}>
      <h3 className={style.title}>Our results</h3>

      <ul className={style.review_list} ref={countContainer}>
        {reviewList.map((item, index) => (
          <li className={style.review_item} key={item.id}>
            <h3 className={style.length}>
              <p ref={(el) => (countEls.current[index] = el)}>0</p>
              {item.id !== 3 && <img alt="icon plus" src={iconPlus} />}
            </h3>
            <div className={style.texts}>
              <span className={style.item_title}>{item.title}</span>
              <p className={style.explain}>{item.explain}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientReview;
