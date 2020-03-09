import React, { useState } from 'react';
import axios from 'axios';
import styles from '../scss/Suggestion.module.scss';

const Suggestion = props => {
  const [url, setUrl] = useState(``);
  const [name, setName] = useState(``);
  const [price, setPrice] = useState(0);
  const [email, setEmail] = useState(``);

  const handleForm = evt => {
    evt.preventDefault();
    // axios.post('/', {
    //   price,
    //   })
    //   .then(res => {
    //     console.log(res);
    //     // props.history.push('/');
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }

  return (
    <section className={styles.section}>
      <div className={styles.title}>제보하기</div>
      <div className={styles.description}>
        <div>제보하고 싶은 상품이 있으면 아래 양식을 작성하고 제출해 주세요.</div>
        <div>자체 검토 후에 업로드되며, 작성해 주신 이메일로 업로드 확인 메일을 보내드립니다.</div>
      </div>
      <form className={styles.form} onSubmit={evt => handleForm(evt)}>
        <label htmlFor="url">사이트 주소</label>
        <input 
          id="url" 
          type="url" 
          placeholder="https://" 
          autoComplete="off" 
          spellCheck="false" 
          required 
          onChange={evt => setUrl(evt.target.value)}
        />
        <label htmlFor="name">상품 이름</label>
        <input 
          id="name" 
          type="text" 
          placeholder="마스크모아 KF94 마스크" 
          autoComplete="off" 
          spellCheck="false" 
          required 
          onChange={evt => setName(evt.target.value)}
        />
        <label htmlFor="price">가격</label>
        <input 
          id="price" 
          type="number" 
          placeholder="2000" 
          autoComplete="off" 
          spellCheck="false" 
          required 
          onChange={evt => setPrice(evt.target.value)}
        />
        <label htmlFor="email">이메일</label>
        <input 
          id="email" 
          type="email" 
          placeholder="example@exam.com" 
          autoComplete="off" 
          spellCheck="false" 
          required 
          onChange={evt => setEmail(evt.target.value)}
        />
        <button type="submit">제출</button>
      </form>
    </section>
  );
}

export default Suggestion;