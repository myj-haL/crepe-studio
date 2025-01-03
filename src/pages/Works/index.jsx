import { useEffect, useState } from "react";
import style from "./index.module.css";
import { database } from "../../firebaseConfig";
import Layouts from '../../common/components/Layouts/index';
import { getDocs , collection, query } from "firebase/firestore/lite";
import { Link } from "react-router-dom";

function Works () {
    // const [postData, setPostData] = useState([]);

    // async function getDocuments() {
        // const q = query(collection(database, "crepeWorks"));
        // const querySnapshot = await getDocs(q);
        // const temp = querySnapshot.docs.map((doc) => ({
        //     id:doc.id,
        //     ...doc.data()
        // }));

        // return temp;
        // let temp = [];

        // querySnapshot.forEach((doc) => {
        //     temp.push(doc.data())
        //     });
        // return temp;
    // }

    // useEffect(() => {
    //     getDocuments().then(data => {
    //         setPostData(data);
    //     });
    // }, []);

    return (
        <Layouts>
            <div className={style.container}>
                <h3 className={style.title}>Board List</h3>
                <ul>
                    {/* {postData.map(post => (
                        <div key={post.id}>
                            <Link to={`detail/${post.id}`}>{post.postTitle}</Link>
                        </div>
                    ))} */}
                    

                </ul>
            </div>
        </Layouts>
    )
}

export default Works;