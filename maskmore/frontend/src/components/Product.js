import React from 'react';
import styles from '../scss/Product.module.scss';
import siren from '../img/siren.png';

const Product = props => {
  return (
    <li className={styles.li}>
      <a className={styles.link} href="https://store.musinsa.com/app/product/detail/1260412/0" target="_blank" rel="noopener noreferrer">
        <img className={styles.img} src="https://image.msscdn.net/images/goods_img/20191231/1260412/1260412_2_500.jpg" alt="마스크 이미지"/>
        <div className={styles.imgLayer}></div>
        <div className={styles.content}>
          <div className={styles.title}>
            <span className={styles.name}>[임태몰] </span>
            <span>KF80 마스크 쇼핑몰에서서 정해 놓은 상품명 5개입</span>
          </div>
          <div className={styles.priceContent}>
            <span className={styles.totalPrice}>17,700원 </span>
            <span className={styles.price}>(1개 3,760원)</span>
          </div>
        </div>
      </a>
      <div className={styles.reportContent}>
        <img src={siren} alt="신고 이미지"/>
        <span>신고</span>
      </div>
    </li>
  );
}

export default Product;
