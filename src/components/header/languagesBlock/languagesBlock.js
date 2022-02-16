import React from 'react';
import LangButton from './languagesBtn';
import {
  languagesBlock,
  languageBetweenEl,
} from './languagesBlock.module.scss';

const LanguagesBlock = () => {
  return (
    <div className={languagesBlock}>
      <LangButton content="RU" />
      <span className={languageBetweenEl}>|</span>
      <LangButton content="UA" />
    </div>
  );
};
export default LanguagesBlock;
