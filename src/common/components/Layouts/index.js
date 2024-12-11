import style from "./index.module.css";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";

function Layouts ({children}) {
  return (
    <div className={style.container}>
      <Header />
      <Body>{children}</Body>
      <Footer />
    </div>
  )
}

export default Layouts ;