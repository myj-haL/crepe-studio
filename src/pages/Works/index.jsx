import style from "./index.module.css";
import Layouts from '../../common/components/Layouts/index';
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Works() {
    const token = localStorage.getItem("accessToken"); // 로그인 여부 확인
    const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate 사용
    const [posts, setPosts] = useState([]); // 게시글 데이터를 저장할 상태
    const [loading, setLoading] = useState(true); // 로딩 상태 관리

    // 페이지 이동을 위한 핸들러
    const handleWriteClick = () => {
        navigate("/works/write");
    };

    // 수정 페이지로 이동하는 핸들러
    const handleEditClick = (e, uuid) => {
        e.preventDefault(); // 기본 링크 이동 방지
        navigate(`/works/${uuid}/edit`); // 수정 페이지로 이동
    };

    // 게시글 삭제 핸들러
    const handleDeleteClick = async (e, uuid) => {
        e.preventDefault(); // 기본 링크 이동 방지

        try {
            const API_URL = process.env.REACT_APP_API_URL;
            const response = await fetch(`${API_URL}/content/${uuid}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                // 삭제된 게시글을 상태에서 제거
                setPosts((prevPosts) => prevPosts.filter((post) => post.uuid !== uuid));
                alert("Post deleted successfully!");
            } else {
                const errorData = await response.json();
                alert(`Error: ${errorData.message}`);
            }
        } catch (error) {
            console.error('Error deleting post:', error);
            alert('Failed to delete the post.');
        }
    };

    // API 호출하여 데이터 가져오기
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const API_URL = process.env.REACT_APP_API_URL;
                const response = await fetch(`${API_URL}/content/list`); // API 엔드포인트 호출 (이 부분을 실제 API URL로 변경)
                const data = await response.json();
                setPosts(data); // API 응답 데이터를 상태에 저장
            } catch (error) {
                console.error('Error fetching posts:', error);
            } finally {
                setLoading(false); // 로딩 상태 해제
            }
        };

        fetchPosts(); // 컴포넌트가 마운트될 때 데이터 로딩
    }, []);

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

                {loading ? (
                    <p>Loading...</p> // 로딩 중이면 "Loading..." 표시
                ) : (
                    <ul className={style.post_list}>
                        {/* API에서 받은 데이터 반복 */}
                        {posts.map((post) => (
                            <li className={style.post_item} key={post.uuid}>
                                <Link to={`/works/${post.uuid}`} className={style.post_link}>
                                    <img alt="post thumbnail" src={post.mainImage} />
                                    <div className={style.title_box}>
                                        <h3 className={style.post_title}>{post.title}</h3>
                                        <p className={style.category}>
                                            {post.services.join(' / ')} {/* 서비스 카테고리 표시 */}
                                        </p>

                                        {/* 로그인한 유저만 수정/삭제 버튼 노출 */}
                                        {token && (
                                            <div className={style.edit_btns}>
                                                <button
                                                    type="button"
                                                    className={style.del}
                                                    onClick={(e) => handleDeleteClick(e, post.uuid)} // 삭제 버튼 클릭 시 handleDeleteClick 호출
                                                >
                                                    삭제
                                                </button>
                                                /
                                                <button
                                                    type="button"
                                                    className={style.edit}
                                                    onClick={(e) => handleEditClick(e, post.uuid)} // 수정 버튼 클릭 시 handleEditClick 호출
                                                >
                                                    수정
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </Layouts>
    );
}

export default Works;
