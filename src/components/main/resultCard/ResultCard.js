import React from 'react';
import * as s from './ResultCard.module.scss';

import resultBefore_1x from 'images/result/result-before-desktop.png';
import resultBefore_2x from 'images/result/result-before-desktop-x2.png';

import resultAfter_1x from 'images/result/result-after-desktop.png';
import resultAfter_2x from 'images/result/result-after-desktop-x2.png';

const ResultCard = ({ textContent }) => {
  const { date, name, cardTitle, cardContent, befor, after } = textContent;

  return (
    <div className={s.sliderWrapper}>
      <div className={s.slider}>
        <p className={`${s.card} ${s.date}`}>{date}</p>
        <p className={`${s.card} ${s.name}`}>{name}</p>
        <h4 className={s.cardTitle}>{cardTitle}</h4>
        <p className={s.cardContent}>{cardContent}</p>
        <ul className={s.imageList}>
          <li className={s.imageItem}>
            <p>{befor}</p>
            <img
              srcSet={`${resultBefore_1x} 1x, ${resultBefore_2x} 2x`}
              src={resultBefore_1x}
              alt="woman before training"
            />
          </li>
          <li className={s.imageItem}>
            <p>{after}</p>
            <img
              srcSet={`${resultAfter_1x} 1x, ${resultAfter_2x} 2x`}
              src={resultAfter_1x}
              alt="woman after training"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ResultCard;
