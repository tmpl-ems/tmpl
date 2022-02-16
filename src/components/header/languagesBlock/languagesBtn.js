import React from 'react';
import { languagesBtn } from './languagesBlock.module.scss';

const LangButton = ({ content }) => {
  return (
    <button className={languagesBtn} type="button">
      {content}
    </button>
  );
};
export default LangButton;
