import React from 'react';
import Button from 'components/common/button/button';
import { enrollSection, enrollButton, text } from './enroll.module.scss';
import Section from 'components/common/section/section';

export const Enroll = ({ onSingUpModalOpen }) => {
  const enroll = {
    ru: {
      title: '',
      text: [
        'Цените свое время?',
        'Хотите гарантированно получить идеальные формы?',
        'Мечтаете закрепить этот результат надолго?',
        'Хотите заниматься в удовольствие?',
        'Тогда записывайтесь на пробную тренировку уже сейчас:',
      ],
    },
    ukr: {},
  };
  return (
    <Section titleLevel="h2" sectionClass={enrollSection}>
      {enroll.ru.text.map(item => (
        <p className={text} key={item}>
          {item}
        </p>
      ))}
      <Button
        classType={2}
        type="button"
        addClass={enrollButton}
        onBtnClick={onModalOpen}
      />
    </Section>
  );
};
