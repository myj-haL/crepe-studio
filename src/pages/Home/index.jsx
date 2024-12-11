import { Link } from 'react-router-dom';
import style from './index.module.css';
import Layouts from '../../common/components/Layouts';
import Works from './Works';
import Service from './Service';
import Process from './Process';
import ClientReview from './ClientReview';
import lineArrowIcon from 'images/common/icon-line-arrow.svg';
import video from 'video/stone_video.mp4';

function Home() {
  return (
    <Layouts>
      <div className={style.container}>
        <h3 className={style.left_title}>
          Crafting
          <br />
          New Possibilities
          <br />
          Creativity
        </h3>
        <h3 className={style.right_title}>
          크레페 스튜디오는 평범한 아이디어를
          <br />
          현실로 실현 가능하게 해주며
          <br />
          창작의 한계를 허물어
          <br /> 함께 새로운 가능성을 열어 갑니다.
        </h3>

        <Works />
        <Service />
        <Process />
        <ClientReview />

        <div className={style.bottom_banner}>
          <video className={style.video_box} autoPlay={true} playsInline={true} muted="muted" loop preload="auto">
            <source src={video} type="video/mp4" />
          </video>
          <h3 className={style.banner_title}>What We Do</h3>
          <Link to="#!">
            More
            <img alt="arrow icon" src={lineArrowIcon} />
          </Link>
        </div>
      </div>
    </Layouts>
  );
}

export default Home;
