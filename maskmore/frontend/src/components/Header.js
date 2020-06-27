import React from 'react';
import styles from '../scss/Header.module.scss';
import logo from '../img/logo.png';

const Header = props => {
  const { handleView } = props;

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <img className={styles.logo} onClick={() => handleView(`products`)} src={logo} alt="로고"/>
        <button type="button" onClick={() => handleView(`products`)}>상품보기</button>
        <button type="button" onClick={() => handleView(`suggestion`)}>제보하기</button>
      </div>
    </header>
  );
}

export default Header;