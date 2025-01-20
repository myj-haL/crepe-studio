import { useState, useRef } from "react";
import Layouts from "../../../common/components/Layouts";
import style from "./index.module.css";
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import addImageIcon from "images/board/icon-add-image.svg";
import Check from "@components/Check";

function WorkWrite() {
  // State for collecting form data
  const [title, setTitle] = useState('');
  const [services, setServices] = useState([]);
  const [link, setLink] = useState('');
  const [content, setContent] = useState('');
  const [mainImage, setMainImage] = useState(null);
  const [subImages, setSubImages] = useState([]);

  // Refs for file inputs
  const mainImageInputRef = useRef(null);
  const subImageInputRef = useRef(null);

  // Toolbar configuration for ReactQuill
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image'],
      ['clean'],
    ],
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const API_URL = process.env.REACT_APP_API_URL;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("link", link);
    formData.append("content", content);
    formData.append("services", JSON.stringify(services));
    if (mainImage) formData.append("mainImage", mainImage);
    subImages.forEach((image, index) => formData.append(`subImages[${index}]`, image));

    try {
      const response = await fetch(`${API_URL}/content/upload`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Content successfully uploaded!");
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error uploading content:", error);
      alert("Failed to upload content.");
    }
  };


  // Add or remove services
  const toggleService = (service) => {
    setServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  // Trigger input click
  const triggerMainImageInput = () => {
    if (mainImageInputRef.current) {
      mainImageInputRef.current.click();
    }
  };

  const triggerSubImageInput = () => {
    if (subImageInputRef.current) {
      subImageInputRef.current.click();
    }
  };

  // Handle image upload
  const handleImageUpload = (e, setImageHandler) => {
    const file = e.target.files[0];
    if (file) setImageHandler(file);
  };

  return (
    <Layouts>
      <div className={style.container}>
        <div className={style.inner}>
          <h3 className={style.title}>Content Registration</h3>

          <form className={style.form_box} onSubmit={handleSubmit}>
            <div className={style.write_box}>
              <span>Title</span>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Please enter the title."
              />
            </div>

            <div className={style.write_box}>
              <span>Services</span>
              <div className={style.check_form_list}>
                <Check
                  content="Branding"
                  id="branding"
                  onChange={() => toggleService('Branding')}
                />
                <Check
                  content="UX/UI Design"
                  id="design"
                  onChange={() => toggleService('UX/UI Design')}
                />
                <Check
                  content="Web Publishing"
                  id="publishing"
                  onChange={() => toggleService('Web Publishing')}
                />
              </div>
            </div>

            <div className={style.write_box}>
              <span>Link</span>
              <input
                type="text"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder="Please enter the link."
              />
            </div>

            <div className={style.write_box}>
              <span>Content Details</span>
              <ReactQuill
                modules={modules}
                value={content}
                onChange={setContent}
                className={style.editor}
                placeholder="Please enter the contents."
              />
            </div>

            <div className={style.write_box}>
              <span>
                Main Image
                <p>
                  <b style={{ color: '#E65706' }}>{mainImage ? 1 : 0}</b>/1
                </p>
              </span>
              <div className={style.img_box} onClick={triggerMainImageInput}>
                <div className={style.text_box}>
                  <input
                    type="file"
                    ref={mainImageInputRef} // Use ref
                    onChange={(e) => handleImageUpload(e, setMainImage)}
                    style={{ display: 'none' }}
                  />
                  {mainImage ? (
                    <img
                      alt="Main Preview"
                      src={URL.createObjectURL(mainImage)} // Show preview inside the upload box
                      className={style.preview_img}
                    />
                  ) : (
                    <>
                      <img alt="add img" src={addImageIcon} />
                      <p>Click the icon to upload an image.</p>
                    </>
                  )}
                </div>
              </div>
            </div>



            <div className={style.write_box}>
              <span>
                Sub Images
                <p>
                  <b style={{ color: '#E65706' }}>{subImages.length}</b>/5
                </p>
              </span>

              <ul className={style.sub_img_list}>
                {subImages.length < 5 && (
                  <li onClick={triggerSubImageInput}>
                    <div className={style.text_box}>
                      <input
                        type="file"
                        ref={subImageInputRef} // Use ref
                        onChange={(e) => {
                          const file = e.target.files[0];
                          if (file) setSubImages((prev) => [...prev, file]);
                        }}
                        style={{ display: 'none' }}
                      />
                      <img alt="add img" src={addImageIcon} />
                      <p>Click the icon to upload an image.</p>
                    </div>
                  </li>
                )}
                {subImages.map((image, index) => (
                  <li key={index}>
                    <img
                      alt={`sub ${index}`}
                      src={URL.createObjectURL(image)}
                      className={style.sub_img}
                    />
                  </li>
                ))}
              </ul>
            </div>

            <button type="submit" className={style.upload}>
              Content Upload
            </button>
          </form>
        </div>
      </div>
    </Layouts>
  );
}

export default WorkWrite;
