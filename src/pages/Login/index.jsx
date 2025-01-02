import style from "./index.module.css";
import Layouts from "../../common/components/Layouts";
import logo from "images/common/logo.svg";

function Login () {
  return (
    <Layouts>
      <div className={style.container}>
        <img alt="logo" src={logo} />

        <form onSubmit="">
          <div className={style.field_box}>
            <input type="text" name="" id="" className={style.user_id} placeholder="ID" />
            <input type="password" name="" id="" className={style.pass} placeholder="PASSWORD" />
          </div>

          <button type="button" className={style.post_btn}>Login</button>
        </form>
      </div>
    </Layouts>
  )
}

export default Login;