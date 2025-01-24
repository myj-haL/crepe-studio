import style from "./index.module.css";

function Check({ content, id, checked, onChange }) { // checked 속성 추가
  return (
    <label htmlFor={id} className={style.check_form}>
      <input
        type="checkbox"
        name="check"
        id={id}
        className={style.true_check}
        onChange={onChange} // onChange 이벤트 핸들러
        checked={checked} // checked 상태 반영
      />
      <div className={style.fake_check}></div>
      <p>{content}</p>
    </label>
  );
}

export default Check;
