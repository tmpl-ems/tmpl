import React from 'react';
import * as s from './ReviewCard.module.scss';

const ReviewCard = ({
  text = 'Default text',
  foto_1x,
  foto_2x,
  girlName = 'Default name',
  date,
}) => {
  return (
    <div className={s.slider}>
      <div className={s.imgWrapper}>
        <img
          srcSet={`${foto_1x} 1x, ${foto_2x} 2x`}
          src={foto_1x}
          alt="girls foto"
        />
        <p className={s.card}>{girlName}</p>
      </div>

      <div className={s.contentWrapper}>
        <p className={s.cardContent}>{text}</p>
        <p className={`${s.card} ${s.date}`}>{date}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
