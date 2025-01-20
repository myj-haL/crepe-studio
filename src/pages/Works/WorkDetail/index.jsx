import style from "./index.module.css";
import Layouts from "../../../common/components/Layouts";
import { useParams } from "react-router-dom"; // useParams를 사용하여 URL 파라미터 받기
import { useState, useEffect } from "react";

function WorkDetail() {
    const { uuid } = useParams(); // URL에서 uuid를 받아옵니다.
    const [post, setPost] = useState(null); // 게시물 데이터를 저장할 상태
    const [loading, setLoading] = useState(true); // 로딩 상태

    // 데이터 fetch를 위한 useEffect
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const API_URL = process.env.REACT_APP_API_URL;
                const response = await fetch(`${API_URL}/content/${uuid}`); // API 호출 (uuid에 맞는 데이터 가져오기)

                if (response.ok) {
                    const data = await response.json();
                    setPost(data); // 데이터 저장
                } else {
                    console.error("Error fetching post data");
                }
            } catch (error) {
                console.error("Error fetching post:", error);
            } finally {
                setLoading(false); // 로딩 상태 해제
            }
        };

        fetchPost(); // 컴포넌트 마운트 시 데이터 fetch
    }, [uuid]);

    if (loading) {
        return <p>Loading...</p>; // 로딩 중 표시
    }

    // 데이터가 없을 경우 처리
    if (!post) {
        return <p>Post not found.</p>;
    }

    return (
        <Layouts>
            <div className={style.container}>
                {/* 임시로 사용한 배너 이미지 */}
                <img alt="visual banner" src={post.mainImage} />

                <div className={style.contents}>
                    <div className={style.left}>
                        <h3 className={style.title}>{post.title}</h3>
                        <p className={style.content} dangerouslySetInnerHTML={{ __html: post.content }} />
                    </div>
                    <div className={style.right}>
                        <h3 className={style.categorys}>Service</h3>
                        <span>
                            {post.services.map((service, index) => (
                                <p key={index} className={style.category_item}>{service}</p>
                            ))}
                        </span>

                        <a href={post.link} className={style.site_link}>
                            Website
                        </a>
                    </div>
                </div>

                {/* 이미지가 있을 경우 이미지 출력 */}
                <div className={style.file_img}>
                    {post.subImages.map((image, index) => (
                        <img key={index} alt={`sub image ${index}`} src={image} />
                    ))}
                </div>

                <a href="/works" className={style.backto_list}>
                    More Works
                </a>
            </div>
        </Layouts>
    );
}

export default WorkDetail;
