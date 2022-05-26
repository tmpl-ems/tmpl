import React from 'react';
import * as s from './ResultCard.module.scss';

const ResultCard = ({ textContent }) => {
  const {
    date,
    name,
    cardTitle,
    cardContent,
    before,
    after,
    images,
    altBefore,
    altAfter,
  } = textContent;

  return (
    <div className={s.sliderWrapper}>
      <div className={s.slider}>
        <p className={`${s.card} ${s.date}`}>{date}</p>
        <p className={`${s.card} ${s.name}`}>{name}</p>
        {cardTitle && <h4 className={s.cardTitle}>{cardTitle}</h4>}
        <p className={s.cardContent}>{cardContent}</p>
        {images && (
          <ul className={s.imageList}>
            <li className={s.imageItem}>
              <p>{before}</p>
              <img
                srcSet={`${images.before_1x} 1x, ${images.before_2x} 2x`}
                src={images.before_1x}
                alt={`${name} ${altBefore}`}
              />
            </li>
            <li className={s.imageItem}>
              <p>{after}</p>
              <img
                srcSet={`${images.after_1x} 1x, ${images.after_2x} 2x`}
                src={images.after_1x}
                alt={`${name} ${altAfter}`}
              />
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default ResultCard;
