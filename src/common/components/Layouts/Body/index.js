import style from "./index.module.css";

function Body ({children}) {
  return (
    <div className={style.container}>{children}</div>
  )
}

export default Body;