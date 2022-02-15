import React from 'react';
import * as s from './ResultCard.module.scss';

import resultBefore_1x from '../../images/result/result-before-desktop.png';
import resultBefore_2x from '../../images/result/result-before-desktop-x2.png';

import resultAfter_1x from '../../images/result/result-after-desktop.png';
import resultAfter_2x from '../../images/result/result-after-desktop-x2.png';

const ResultCard = () => {
  return (
    <div className={s.sliderWrapper}>
      <div className={s.slider}>
        <p className={`${s.card} ${s.date}`}>14.10.2021</p>
        <p className={`${s.card} ${s.name}`}>Ирина</p>
        <h4 className={s.cardTitle}>Заголовок</h4>
        <p className={s.cardContent}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis
          varius eros ac rhoncus. Phasellus volutpat sem leo, sed pulvinar lacus
          gravida at. Proin mollis varius eros ac rhoncus.
        </p>
        <ul className={s.imageList}>
          <li className={s.imageItem}>
            <p>До</p>
            <img
              srcset={`${resultAfter_1x} 1x, ${resultAfter_2x} 2x`}
              src={resultAfter_1x}
              alt="woman before training"
            />
          </li>
          <li className={s.imageItem}>
            <p>После</p>
            <img
              srcset={`${resultBefore_1x} 1x, ${resultBefore_2x} 2x`}
              src={resultBefore_1x}
              alt="woman after training"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ResultCard;
