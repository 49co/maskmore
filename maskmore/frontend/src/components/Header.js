import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../scss/Header.module.scss';

const Header = () => {
  return (
    <header className={styles.container}>
      <Link to='/'>
        <button type='button'>상품보기</button>
      </Link>
      <Link to='/suggestion'>
        <button type='button'>제보하기</button>
      </Link>
    </header>
  );
}

export default Header;