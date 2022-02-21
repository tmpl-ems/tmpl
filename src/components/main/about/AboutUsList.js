import React from 'react';

import LightIcon from 'images/svg/about-list-mark-lightning.svg';

import * as s from './AboutUsList.module.scss';

const AboutUsList = ({ list }) => {
  return (
    <ul>
      {list?.map((item, index) => (
        <li key={index} className={s.listItem}>
          <LightIcon className={s.marker} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default AboutUsList;
