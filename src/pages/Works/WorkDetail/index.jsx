import style from "./index.module.css";
import Layouts from "../../../common/components/Layouts";
import sampleVisual from "images/sample/floor-banner.png";
import sampleImg from "images/sample/sample_cat.webp";
import { Link } from "react-router-dom";

function WorkDetail () {
    return (
        <Layouts>
            <div className={style.container}>
                <img alt="visual banner" src={sampleVisual} />

                <div className={style.contents}>
                    <div className={style.left}>
                        <h3 className={style.title}>Post Title</h3>
                        <p className={style.content}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam illum exercitationem a magnam expedita voluptatum pariatur, necessitatibus dignissimos perferendis quibusdam quaerat iste, voluptate quia nobis doloribus nulla possimus velit nisi, enim neque reiciendis rerum debitis iure! Nemo dignissimos quibusdam nesciunt possimus ipsa cum asperiores illum qui, sit sint facilis porro.
                        </p>
                    </div>
                    <div className={style.right}>
                        <h3 className={style.categorys}>Service</h3>
                        <span>
                            <p className={style.category_item}>UX/UI Design</p>
                            <p className={style.category_item}>WebPublishing</p>
                            <p className={style.category_item}>Branding</p>
                        </span>

                        <Link to="" className={style.site_link}>
                            Website
                        </Link>
                    </div>
                </div>

                {/* TODO : 첨부한 사진 5개 */}
                <div className={style.file_img}>
                    {
                        Array(5).fill('').map((item, i) => (
                            <img alt="img" src={sampleImg} />
                        ))
                    }
                </div>      

                <Link to="" className={style.backto_list}>
                    More Works
                </Link>
            </div>
        </Layouts>
    )
}

export default WorkDetail;