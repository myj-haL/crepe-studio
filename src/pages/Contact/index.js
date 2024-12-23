import { useRef, useState } from 'react';
import { contactList } from './contactList';
import style from './index.module.css';
import Layouts from '../../common/components/Layouts';
import emailjs from "@emailjs/browser";

function Contact() {
  const fileRef = useRef();
  const [isSelectFile, setIsSelectFile] = useState();

  const handleFileBtn = () => {
    fileRef.current.click();
  };

  const handleFileInput = (e) => {
    const fileName = e.target.files[0].name;
    setIsSelectFile(fileName);
  };
  
  //이메일
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    call: '',
    site: '',
    message: '',
  });

  const handleEmailSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_company : formData.company,
      from_name : formData.name,
      from_email : formData.email,
      from_call : formData.call,
      from_site : formData.site,
      from_attachment : formData.attachment,
      from_message : formData.message
    }

    if(!formData.company || !formData.name || !formData.email || !formData.call || !formData.message) {
      alert('필수 항목을 채워주세요.');
      return;
    }

    emailjs
    .send(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, templateParams, process.env.REACT_APP_EMAIL_USER_ID)
    .then(
    (response) => {
        console.log('Email sent successfully', response);
        // setPopupType('success');
    },
    (error) => {
        console.error('Error sending email', error);
        // setPopupType('error');
        return;
    }
    );
  };


  const emailHandleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]:value
    }));
  };




  return (
    <Layouts>
      <div className={style.container}>
        <h3 className={style.title}>Contact</h3>

        <form onSubmit={handleEmailSubmit}>
          <div className={style.enter_list}>
            {contactList.map((item) => (
              <div className={style.form_box} key={item.id}>
                <h3 className={`${style.category} ${item.requir === true ? style.requir : ''}`}>{item.name}</h3>
                {item.id === 6 ? (
                  <textarea placeholder={item.placeHolder} name='message' value={formData.message} onChange={emailHandleChange}  className={style.user_text_box}></textarea>
                ) : (
                  <>
                    {item.type === 'file' ? (
                      <label htmlFor="fileName">
                        <input
                          type="texet"
                          readOnly
                          placeholder={isSelectFile ? '' : item.placeHolder}
                          value={isSelectFile && isSelectFile}
                          onClick={handleFileBtn}
                          className={style.file_name_input}
                        />
                        <input
                          type="file"
                          ref={fileRef}
                          onChange={handleFileInput}
                          id="fileName"
                          style={{ display: 'none' }}
                        />
                        <button type="button" onClick={handleFileBtn} className={style.file_upload}>
                          *파일선택
                        </button>
                      </label>
                    ) : (
                      <input type={item.type} name={item.category} value={formData[item.category] || ''} onChange={emailHandleChange}  placeholder={item.placeHolder} className={style.user_input} />
                    )}
                  </>
                )}
              </div>
            ))}
          </div>

          <button className={style.submit_btn} type="submit">
            문의 보내기
          </button>
        </form>
      </div>
    </Layouts>
  );
}

export default Contact;