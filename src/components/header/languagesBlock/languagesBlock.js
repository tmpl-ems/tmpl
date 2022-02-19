import React from 'react';
// import { useTranslation } from 'gatsby-plugin-react-i18next';
import {
  languagesBlock,
  separator,
  langLink,
  active,
} from './languagesBlock.module.scss';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';

const LanguagesBlock = () => {
  const { originalPath } = useI18next();

  return (
    <div className={languagesBlock}>
      <Link
        to={originalPath}
        language={'uk'}
        activeClassName={active}
        className={langLink}
      >
        {'ua'}
      </Link>
      <span className={separator}></span>
      <Link
        to={originalPath}
        language={'ru'}
        activeClassName={active}
        className={langLink}
      >
        {'ru'}
      </Link>
    </div>
  );
};
export default LanguagesBlock;
