import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import cx from 'classnames';
import styles from '../scss/Main.module.scss';
import Product from './Product';

const Main = () => {
  const [kind, setKind] = useState(`ALL`);
  const [masks, setMasks] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    axios.get('/store/masks/')
      .then(res => {
        setMasks(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [pathname]);

  return (
    <section className={styles.section}>
      <nav className={styles.kindNav}>
        <ul>
          <li className={cx({[styles.selectedKind]: kind === `ALL`})} onClick={() => setKind(`ALL`)}>전체</li>
          <li className={cx({[styles.selectedKind]: kind === `KF94`})} onClick={() => setKind(`KF94`)}>KF94</li>
          <li className={cx({[styles.selectedKind]: kind === `KF80`})} onClick={() => setKind(`KF80`)}>KF80</li>
        </ul>
      </nav>
      <article>
        <ul className={styles.products}>
          {masks.map((mask, index) => (mask.is_visible === 'T' && 
            <Product
              key={index}
              mask={mask}
              kind={kind}
            />
          ))}
        </ul>
      </article>
    </section>
  );
}

export default Main;
