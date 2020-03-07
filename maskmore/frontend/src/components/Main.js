import React, { useState } from 'react';
import cx from 'classnames';
import styles from '../scss/Main.module.scss';
import Product from './Product';

const Main = () => {
  const [kind, setKind] = useState(`all`);
  const products = [1, 2, 3, 4, 5];

  return (
    <section className={styles.section}>
      <nav className={styles.kindNav}>
        <ul>
          <li className={cx({[styles.selectedKind]: kind === `all`})} onClick={() => setKind(`all`)}>전체</li>
          <li className={cx({[styles.selectedKind]: kind === `kf94`})} onClick={() => setKind(`kf94`)}>KF94</li>
          <li className={cx({[styles.selectedKind]: kind === `kf80`})} onClick={() => setKind(`kf80`)}>KF80</li>
        </ul>
      </nav>
      <article>
        <ul className={styles.products}>
          {products.map(item => (
            <Product
              key={item}
              title={item}
            />
          ))}
        </ul>
      </article>
    </section>
  );
}

export default Main;
