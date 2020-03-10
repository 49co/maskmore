import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cx from 'classnames';
import styles from '../scss/MainContainer.module.scss';
import Product from '../components/Product';
import Suggestion from '../components/Suggestion';
import Report from '../components/Report';

const MainContainer = props => {
  const { currentView } = props;
  const [kind, setKind] = useState(`ALL`);
  const [masks, setMasks] = useState([]);
  const [viewReport, setViewReport] = useState(false);
  const [reportProduct, setReportProduct] = useState(``);
  
  const getProducts = () => {
    axios.get(`/store/masks/`)
    .then(res => {
      setMasks(res.data);
    })
    .catch(err => {
      console.log(err);
    });
  }

  const handleViewReport = title => {
    setViewReport(true);
    setReportProduct(title)
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
                handleViewReport={handleViewReport}
              />
            ))}
            </ul>
          </article>
        </>
      )}
      {currentView === `suggestion` && <Suggestion />}
      {viewReport && (
        <>
          <div className={styles.layer} onClick={() => setViewReport(false)}></div>
          <Report reportProduct={reportProduct} setViewReport={setViewReport} />
        </>
      )}
    </section>
  );
}

export default MainContainer;
