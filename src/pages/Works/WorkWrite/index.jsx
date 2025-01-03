import { useState } from "react";
import Layouts from "../../../common/components/Layouts";
import style from "./index.module.css";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

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
          <ReactQuill modules={modules} value={value} onChange={setValue} className={style.editor} placeholder="Please enter the contents." />

          <button type="submit" className={style.upload}>Upload</button>
        </div>
      </div>
    </Layouts>
  )
}

export default WorkWrite;