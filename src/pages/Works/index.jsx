import style from "./index.module.css";
import Layouts from '../../common/components/Layouts/index';
import sampleThumbnail from "images/sample/floor-banner.png";
import { Link, useNavigate } from "react-router-dom";

function Works() {
    const token = localStorage.getItem("accessToken"); // 로그인 여부 확인
    const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate 사용

    const handleWriteClick = () => {
        navigate("/works/write");
    };

    return (
        <Layouts>
            <div className={style.container}>
                {/* 관리자 계정에서만 Write 버튼 노출 */}
                {token && (
                    <button
                        type="button"
                        className={style.write_btn}
                        onClick={handleWriteClick}
                    >
                        Write
                    </button>
                )}

                <ul className={style.post_list}>
                    {/* 임시 더미 데이터 반복 */}
                    {Array(7).fill('').map((li, i) => (
                        <li className={style.post_item} key={i}>
                            <Link to="" className={style.post_link}>
                                <img alt="post thumbnail" src={sampleThumbnail} />
                                <div className={style.title_box}>
                                    <h3 className={style.post_title}>POST TITLE</h3>
                                    <p className={style.category}>UX / UI / Web Publishing</p>

                                    {/* 로그인한 유저만 수정/삭제 버튼 노출 */}
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
                    ))}
                </ul>
            </div>
        </Layouts>
    );
}

export default Works;
