import React from 'react';
import styles from '../scss/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.by}>by Imtak, Kenny, and Nani</div>
      <div className={styles.contact}>
        <strong>contact </strong>
        <span>95imtae@gmail.com</span>
      </div>
    </footer>
  );
}

export default Footer;