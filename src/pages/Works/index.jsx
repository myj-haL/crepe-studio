import style from "./index.module.css";
import Layouts from '../../common/components/Layouts/index';
import sampleThumbnail from "images/sample/floor-banner.png";
import { Link } from "react-router-dom";

//게시판 목록
function Works() {
    const token = localStorage.getItem("accessToken"); // 로그인 여부 확인

    return (
        <Layouts>
            <div className={style.container}>
                {/* TODO : 관리자 계정에서만 노출 */}
                <button type="button" className={style.write_btn}>Write</button>

                <ul className={style.post_list}>
                    {/* TODO : li 가 반복 / 아래 array 는 임시 더미 리스트 구현하기 위함. */}
                    {
                        Array(7).fill('').map((li, i) => (
                            <li className={style.post_item} key="">
                                <Link to="" className={style.post_link}>


                                    <img alt="post thumbnail" src={sampleThumbnail} />
                                    <div className={style.title_box}>
                                        <h3 className={style.post_title}>POST TITLE</h3>
                                        <p className={style.category}>UX / UI / Web Publishing</p>

                                        {/* 🔥 로그인한 유저만 수정/삭제 버튼 보이도록 조건부 렌더링 */}
                                        {token && (
                                            <div className={style.edit_btns}>
                                                <button type="button" className={style.del}>삭제</button>
                                                /
                                                <button type="button" className={style.edit}>수정</button>
                                            </div>
                                        )}
                                    </div>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </Layouts>
    )
}

export default Works;