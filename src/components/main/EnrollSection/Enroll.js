import React from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';
import Button from 'components/common/button/button';
import { enrollSection, enrollButton, text } from './enroll.module.scss';
import Section from 'components/common/section/section';

export const Enroll = ({ onSingUpModalOpen }) => {
  const { t } = useI18next();

  const data = t('enroll', { returnObjects: true });

  return (
    <Section
      head={data.title}
      titleHidden={true}
      titleLevel="h2"
      sectionClass={enrollSection}
    >
      {data.text.map(item => (
        <p className={text} key={item}>
          {item}
        </p>
      ))}
      <Button
        classType={2}
        type="button"
        addClass={enrollButton}
        onBtnClick={onSingUpModalOpen}
      />
    </Section>
  );
};
