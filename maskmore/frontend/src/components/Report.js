import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styles from '../scss/Report.module.scss';
import exit from '../img/exit.png';

const Report = props => {
  const descriptionRef = useRef(null);
  const { reportProduct, setViewReport } = props;
  const [email, setEmail] = useState(``);
  const [description, setDescription] = useState(``);

  const handleForm = evt => {
    evt.preventDefault();
    axios.post(`/store/masks/`, {
      title: reportProduct,
      description,
      email,
    })
      .then(res => {
        alert(`신고 완료되었습니다. 소중한 신고 감사합니다 :\)`);
        setViewReport(false);
      })
      .catch(err => {
        console.log(err);
      });
  }

  useEffect(() => {
    descriptionRef.current.focus();
  }, [])

  return (
    <article className={styles.article}>
      <img className={styles.exit} src={exit} alt="종료 이미지" onClick={() => setViewReport(false)}/>
      <div className={styles.title}>상품 신고</div>
      <div className={styles.description}>
        <div>명시된 상품 정보가 잘못되었거나, 판매자와의 연락이 되지 않는 경우 등 불편한 점이 있으면 신고해 주세요.</div>
      </div>
      <form className={styles.form} onSubmit={evt => handleForm(evt)}>
        <label>신고할 상품</label>
        <div className={styles.reportProduct}>{reportProduct}</div>
        <label htmlFor="description">신고 내용</label>
        <input 
          id="description" 
          type="text" 
          placeholder="신고하실 내용을 작성해 주세요." 
          autoComplete="off" 
          spellCheck="false" 
          required 
          onChange={evt => setDescription(evt.target.value)}
          value={description}
          ref={descriptionRef}
        />
        <label htmlFor="email">답변 받을 이메일</label>
        <input 
          id="email" 
          type="email" 
          placeholder="example@exam.com" 
          autoComplete="off" 
          spellCheck="false" 
          required 
          onChange={evt => setEmail(evt.target.value)}
          value={email}
        />
        <button type="submit">제출</button>
      </form>
    </article>
  );
}

export default Report;