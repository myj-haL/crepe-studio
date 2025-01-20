import { useState } from "react";
import Layouts from "../../../common/components/Layouts";
import style from "./index.module.css";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import addImageIcon from "images/board/icon-add-image.svg";
import samepleImg from "images/sample/sample_cat.webp";

function WorkWrite () {
  const [value, setValue] = useState('');
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }

  return (
    <Layouts>
      <div className={style.container}>
        <div className={style.inner}>
          <h3 className={style.title}>Content Registration</h3>

          <form onSubmit="" className={style.form_box}>
            <div className={style.write_box}>
              <span>Content Details</span>
              <ReactQuill modules={modules} value={value} onChange={setValue} className={style.editor} placeholder="Please enter the contents." />
            </div>

            {/* TODO : 메인 이미지 */}
            <div className={style.write_box}>
              <span>
                Main Image
                <p><b style={{'color' : '#E65706'}}>0</b>/1</p>
              </span>
              <div className={style.img_box}>
                <div className={style.text_box}>
                  <input type="file" name="" id="" style={{display:'none'}}/>
                  <img alt="add img" src={addImageIcon} />
                  <p>Click the icon to upload an image.</p>
                </div>
              </div>
            </div>

            {/* TODO : 서브 이미지 */}
            <div className={style.write_box}>
              <span>
                Sub Images
                <p><b style={{'color' : '#E65706'}}>0</b>/5</p>
              </span>

              <ul className={style.sub_img_list}>
                {/* TODO : 사진이 추가되면 차례대로 li가 생성되도록 해주세요. */}
                <li>
                  <div className={style.text_box}>
                    <input type="file" name="" id="" style={{display:'none'}}/>
                    <img alt="add img" src={addImageIcon} />
                    <p>Click the icon to upload an image.</p>
                  </div>
                </li>
                <li>
                  <img alt="sample" src={samepleImg} className={style.sub_img} />
                </li>
              </ul>
            </div>

            <button type="submit" className={style.upload}>Content Upload</button>
          </form>
        </div>
      </div>
    </Layouts>
  )
}

export default WorkWrite;