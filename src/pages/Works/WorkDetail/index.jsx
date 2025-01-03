import style from "./index.module.css";
import { database } from "../../../firebaseConfig";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore/lite";
import { useParams } from "react-router-dom";
import NoData from "../../../common/components/NoData";
import Layouts from "../../../common/components/Layouts";

function WorkDetail () {
    /* 기록용 */
    const [detailPost, setDetailPost] = useState();
    // const postId = window.location.pathname.split("/").pop();
    const params = useParams();

    async function getDetailDocuments() {
        const docRef = doc(database, "crepeWorks", params.id);
        const docSnap = await getDoc(docRef);

        return docSnap.data();
    }

    useEffect(() => {
        getDetailDocuments().then(data => {
            setDetailPost(data);
        });
    }, []);

    return (
        <Layouts>
            <div className={style.container}>
                {detailPost ? 
                    <>
                        {detailPost.title}
                        {detailPost.category}
                    </>
                    :
                    <NoData />
                }
            </div>
        </Layouts>
    )
}

export default WorkDetail;