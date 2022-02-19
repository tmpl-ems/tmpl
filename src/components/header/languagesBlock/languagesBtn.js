import React from 'react';
import * as s from './languagesBlock.module.scss';

const LangButton = ({ content, changeLanguage }) => {
  return (
    <button
      className={s.languagesBtn}
      type="button"
      onClick={() => changeLanguage(content)}
    >
      {content}
    </button>
  );
};
export default LangButton;
