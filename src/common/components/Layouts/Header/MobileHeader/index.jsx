import { useState } from 'react';
import { menuList } from '../menuList';
import logo from 'images/common/logo.svg';
import hamburger from 'images/common/hamburger.svg';
import close from 'images/common/close.svg';
import style from './index.module.css';
import { Link } from 'react-router-dom';

function MobileHeader() {
  const [isFngOpen, setIsFngOpen] = useState();

  const fngControl = () => {
    setIsFngOpen(!isFngOpen);
  };

  return (
    <>
      <div className={style.container}>
        <button className={style.hamburger} type="button" onClick={fngControl}>
          <img alt="hamburger" src={hamburger} />
        </button>

        <Link to={'/'} className={style.logo_link}>
          <h1>로고 이미지</h1>
          <img alt="logo" src={logo} />
        </Link>
      </div>
      
      {/* FNB */}
      <div className={`${style.fnb} ${isFngOpen ? 'active' : ''}`}>
        <button className={style.close} type="button" onClick={fngControl}>
          <img alt="close" src={close} />
        </button>

        <ul className={style.menu}>
          {menuList.map((item) => (
            <li className={style.link} key={item.id}>
              <Link to={item.src}>
                {item.name}
              </Link>
            </li>
          ))}
          {/* TODO : 어드민일경우 로그인 했을 때만 노출합니다. */}
          <li>
            <Link>LogOut</Link>
          </li>
        </ul>
      </div>
      {/* //FNB */}
    </>
  );
}

export default MobileHeader;
