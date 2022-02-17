import React from 'react';
import * as s from './languagesBlock.module.scss';

const LangButton = ({ content }) => {
  return (
    <button className={s.languagesBtn} type="button">
      {content}
    </button>
  );
};
export default LangButton;
