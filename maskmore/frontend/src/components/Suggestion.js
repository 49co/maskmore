import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styles from '../scss/Suggestion.module.scss';

const Suggestion = () => {
  const urlRef = useRef(null);
  const [url, setUrl] = useState(``);
  const [name, setName] = useState(``);
  const [price, setPrice] = useState(``);
  const [email, setEmail] = useState(``);

  const handleForm = evt => {
    evt.preventDefault();
    axios.post(`/store/suggestions/`, {
      title: name,
      origin_url: url,
      package_price: price,
      email,
    })
      .then(res => {
        alert(`제보 완료되었습니다. 소중한 제보 감사합니다 :\)`);
        setUrl(``);
        setName(``);
        setPrice(``);
        setEmail(``);
        urlRef.current.focus();
      })
      .catch(err => {
        console.log(err);
      });
  }

  useEffect(() => {
    urlRef.current.focus();
  }, [])

  return (
    <article className={styles.article}>
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
          value={url}
          ref={urlRef}
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
          value={name}
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
          value={price}
        />
        <label htmlFor="email">이메일</label>
        <input 
          id="email" 
          type="email" 
          placeholder="example@exam.com" 
          autoComplete="off" 
          spellCheck="false" 
          onChange={evt => setEmail(evt.target.value)}
          value={email}
        />
        <button type="submit">제출</button>
      </form>
    </article>
  );
}

export default Suggestion;