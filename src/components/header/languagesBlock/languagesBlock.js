import React from 'react';
import {
  languagesBlock,
  ruBtn,
  uaBtn,
  languageBetweenEl,
} from './languagesBlock.module.scss';

const LanguagesBlock = () => {
  return (
    <div className={languagesBlock}>
      <button className={ruBtn} type="button">
        RU
      </button>
      <p className={languageBetweenEl}>|</p>
      <button className={uaBtn} type="button">
        UA
      </button>
    </div>
  );
};
export default LanguagesBlock;
