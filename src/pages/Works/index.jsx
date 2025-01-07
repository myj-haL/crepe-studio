import style from "./index.module.css";
import Layouts from '../../common/components/Layouts/index';
import sampleThumbnail from "images/sample/floor-banner.png";
import { Link } from "react-router-dom";

//게시판 목록
function Works () {
    return (
        <Layouts>
            <div className={style.container}>
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

                                        <div className={style.edit_btns}>
                                            <button type="button" className={style.del}>삭제</button>
                                            /
                                            <button type="button" className={style.edit}>수정</button>
                                        </div>
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