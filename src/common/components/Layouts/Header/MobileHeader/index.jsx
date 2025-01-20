import { useState } from 'react';
import { menuList } from '../menuList';
import logo from 'images/common/logo.svg';
import hamburger from 'images/common/hamburger.svg';
import close from 'images/common/close.svg';
import style from './index.module.css';
import { Link, useNavigate } from 'react-router-dom';

function MobileHeader() {
  const [isFngOpen, setIsFngOpen] = useState();

  const navigate = useNavigate();
  const accessToken = localStorage.getItem('accessToken'); // 토큰 확인

  const fngControl = () => {
    setIsFngOpen(!isFngOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken'); // accessToken 삭제
    navigate('/'); // 경로 이동
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
              <Link to={item.src}>{item.name}</Link>
            </li>
          ))}
          {accessToken && ( // 조건부 렌더링
            <li>
              <Link onClick={handleLogout}>
                LogOut
              </Link>
            </li>
          )}
        </ul>
      </div>
      {/* //FNB */}
    </>
  );
}

export default MobileHeader;
