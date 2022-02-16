import React from 'react';
import LangButton from './languagesBtn';
import { languagesBlock, separator } from './languagesBlock.module.scss';

const LanguagesBlock = () => {
  return (
    <div className={languagesBlock}>
      <LangButton content="ru" />
      <span className={separator}></span>
      <LangButton content="ua" />
    </div>
  );
};
export default LanguagesBlock;
