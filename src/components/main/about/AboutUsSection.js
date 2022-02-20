import React from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';

import Section from 'components/common/section/section';
import AboutUsList from './AboutUsList';

import * as s from './AboutUsSection.module.scss';

const AboutUsSection = ({ id }) => {
  const { t } = useI18next();
  const data = t('about', { returnObjects: true });
  
  return (
    <Section head={data.title} titleLevel="h2" id={id}>
      <div className={s.wrapper}>
        <p className={s.description}>{data.description}</p>
        <p className={s.listPreTitle}>{data.listPreTitle}</p>
        <div className={s.listBox}>
          <div className={s.listWrapper}>
            <h3 className={s.listTitle}>{data.gymListTitle}</h3>
            <AboutUsList list={data.gymListContent} />
          </div>
          <div className={s.listWrapper}>
            <h3 className={s.listTitle}>{data.EMSListTitle}</h3>
            <AboutUsList list={data.EMSListContent} />
          </div>
        </div>
        <p className={s.resultText}>{data.resultText}</p>
      </div>
    </Section>
  );
};

export default AboutUsSection;
