import { menuList } from '../menuList';
import logo from 'images/common/logo.svg';
import style from './index.module.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function PcHeader() {
  const location = useLocation();
  const navigate = useNavigate(); // useNavigate 훅 사용
  const accessToken = localStorage.getItem('accessToken'); // localStorage에서 토큰 가져오기

  const handleLogout = (e) => {
    e.preventDefault(); // 기본 동작 방지
    localStorage.removeItem('accessToken'); // accessToken 삭제
    navigate('/'); // React Router로 경로 이동
  };

  return (
    <div className={style.container}>
      <Link to={'/'} className={style.logo_link}>
        <h1 className={style.logo_title}>미니빔 로고 이미지</h1>
        <img alt="logo img" src={logo} />
      </Link>

      <ul className={style.menu_list}>
        {/* LogOut 버튼 */}
        {accessToken && ( // 조건부 렌더링
          <li>
            <Link onClick={handleLogout}>
              LogOut
            </Link>
          </li>
        )}
        {/* 메뉴 리스트 */}
        {menuList.map((item) => (
          <li
            className={`${style.menu_item} ${location.pathname.includes(item.src) ? style.active : ""
              }`}
            key={item.id}
          >
            <Link to={item.src}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PcHeader;
