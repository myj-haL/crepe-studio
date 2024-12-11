import useResponsive from '@hook/Responsive';
import MobileHeader from './MobileHeader';
import PcHeader from './PcHeader';
import style from './index.module.css';

function Header() {
  const innerWidth = useResponsive();

  return <header className={style.container}>{innerWidth < 1280 ? <MobileHeader /> : <PcHeader />}</header>;
}

export default Header;
