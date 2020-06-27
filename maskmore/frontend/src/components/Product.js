import React from 'react';
import styles from '../scss/Product.module.scss';
import siren from '../img/siren.png';

const Product = props => {
  const { mask, kind, handleViewReport } = props;

  if (kind !== `ALL` & kind !== mask.category) {
    return null;
  }
  return (
    <li className={styles.li}>
      <a className={styles.link} href={mask.origin_url} target="_blank" rel="noopener noreferrer">
        <img className={styles.img} src={mask.image} alt="마스크 이미지"/>
        <div className={styles.updateTime}>
          <div className={styles.timeLayer}></div>
          <div className={styles.time}>{mask.update_time}</div>
        </div>
        <div className={styles.content}>
          <div className={styles.title}>
            <span className={styles.name}>[{mask.title}] </span>
            <span>{mask.description}</span>
          </div>
          <div className={styles.priceContent}>
            <span className={styles.totalPrice}>{mask.package_price.toLocaleString()}원 </span>
            <span className={styles.price}>(1개 {mask.price.toLocaleString()}원)</span>
          </div>
        </div>
      </a>
      <div className={styles.reportContent} onClick={() => handleViewReport(mask.pk, `[${mask.title}] ${mask.description}`)}>
        <img src={siren} alt="신고 이미지"/>
        <span>신고</span>
      </div>
    </li>
  );
}

export default Product;
