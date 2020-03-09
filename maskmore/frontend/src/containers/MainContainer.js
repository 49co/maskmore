import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cx from 'classnames';
import styles from '../scss/MainContainer.module.scss';
import Product from '../components/Product';
import Suggestion from '../components/Suggestion';

const MainContainer = props => {
  const { currentView } = props;
  const [kind, setKind] = useState(`ALL`);
  const [masks, setMasks] = useState([]);
  
  const getProducts = () => {
    axios.get(`/store/masks/`)
    .then(res => {
      setMasks(res.data);
    })
    .catch(err => {
      console.log(err);
    });
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className={styles.section}>
      {currentView === `products` && (
        <>
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
        </>
      )}
      {currentView === `suggestion` && <Suggestion />}
    </section>
  );
}

export default MainContainer;
