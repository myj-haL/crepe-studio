import style from "./index.module.css";

function Check({ content, id, onChange }) {
  return (
    <label htmlFor={id} className={style.check_form}>
      <input
        type="checkbox"
        name="check"
        id={id}
        className={style.true_check}
        onChange={onChange} // onChange 이벤트 핸들러 추가
      />
      <div className={style.fake_check}></div>
      <p>{content}</p>
    </label>
  );
}

export default Check;
