import React from 'react';
// import { useTranslation } from 'gatsby-plugin-react-i18next';
import LangButton from './languagesBtn';
import { languagesBlock, separator } from './languagesBlock.module.scss';
import { useI18next } from 'gatsby-plugin-react-i18next';

const LanguagesBlock = () => {
  const { changeLanguage } = useI18next();

  return (
    <div className={languagesBlock}>
      <LangButton content="uk" changeLanguage={changeLanguage} />
      <span className={separator}></span>
      <LangButton content="ru" changeLanguage={changeLanguage} />
    </div>
  );
};
export default LanguagesBlock;
