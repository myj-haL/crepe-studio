import logo from 'images/common/logo.svg';
import { snsList } from './snsList';
import style from './index.module.css';

function Footer() {
  return (
    <footer className={style.container}>
      <div className={style.wrap}>
        <img alt="logo" src={logo} className={style.logo} />
        <ul className={style.foot_info}>
          <li className={style.info_item}>
            (주) 크레페스튜디오 <p>|</p> 대표 문유정 임지영
          </li>
          <li className={style.info_item}>
            사업자등록번호 : 203-2933-20392
            <br />
          </li>
          {/* <li className={style.info_item}>전화번호 : 02-203-2223</li> */}
          <li className={style.info_item}>이메일 : crepestudio@gmail.com</li>
          <li className={style.info_item}>주소 : 서울특별시 서대문구 어디오 12층</li>
        </ul>

        <p className={style.copyright}>© 2025 Crepestudio Inc. All rights reserved.</p>

        <div className={style.sns_box}>
          {snsList.map((item) => (
            <a className={style.sns_link} href={item.src} key={item.id}>
              <img alt="sns img" src={item.img} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
