import React from 'react';
import * as s from './DotsLoader.module.scss';

const DotsLoader = ({ text, addClass }) => {
  return (
    <span className={addClass}>
      {text}
      <span className={s.first}></span>
      <span className={s.second}></span>
      <span className={s.third}></span>
    </span>
  );
};

export default DotsLoader;
