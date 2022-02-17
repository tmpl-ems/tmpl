import React from 'react';
import LangButton from './languagesBtn';
import * as s from './languagesBlock.module.scss';

const LanguagesBlock = () => {
  return (
    <div className={s.languagesBlock}>
      <LangButton content="RU" />
      <span className={s.languageBetweenEl}>|</span>
      <LangButton content="UA" />
    </div>
  );
};
export default LanguagesBlock;
