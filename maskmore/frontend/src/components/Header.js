import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../scss/Header.module.scss';
import logo from '../img/logo.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Link to="/">
          <img className={styles.logo} src={logo} alt="로고"/>
        </Link>
        <Link to="/" className={styles.gnb}>
          <button type="button">상품보기</button>
        </Link>
        <Link to="/suggestion" className={styles.gnb}>
          <button type="button">제보하기</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;