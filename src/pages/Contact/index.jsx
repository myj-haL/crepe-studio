import { useRef, useState } from 'react';
import { contactList } from './contactList';
import style from './index.module.css';
import Layouts from '../../common/components/Layouts';

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

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
  
    if (!formData.company || !formData.name || !formData.email || !formData.call || !formData.message) {
      alert('필수 항목을 채워주세요.');
      return;
    }
  
    const apiUrl = `${process.env.REACT_APP_API_URL}/contact`; // 환경 변수에서 API URL 생성
    const formDataToSend = new FormData();
  
    formDataToSend.append('organization', formData.company);
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('call', formData.call);
    formDataToSend.append('site', formData.site);
    formDataToSend.append('message', formData.message);
  
    // 파일 첨부
    if (fileRef.current.files[0]) {
      formDataToSend.append('attachment', fileRef.current.files[0]);
    }
  
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formDataToSend, // FormData 전송
      });
  
      if (response.ok) {
        console.log('Email sent successfully');
        alert('문의가 성공적으로 전송되었습니다.');
      } else {
        console.error('Error sending email');
        alert('문의 전송 중 오류가 발생했습니다.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('서버와의 연결에 실패했습니다.');
    }
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
                          type="text"
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