import React from 'react';
import * as s from './goals.module.scss';
import { useI18next } from 'gatsby-plugin-react-i18next';

import Section from 'components/common/section/section';
import Button from 'components/common/button/button';
import { sortItems } from 'services/services';

const data = {
  ru: {
    title: 'Цели',
    content:
      'ЕМС подходит для тех, кто ценит свое время и хочет прийти в форму безопасно и не изнуряя себя ',
    content2:
      'Теперь спортивное тело мечты можно получить намного проще и быстрее.',
    content3: 'С помощью регулярных тренировок вы сможете:',
    li: [
      {
        id: 1,
        text: 'Избавиться от лишних килограммов и поддерживать свою идеальную фигуру',
      },
      {
        id: 2,
        text: 'Избавиться от “апельсиновой корки” даже в самых “сложных” местах',
      },
      { id: 3, text: 'Быстро восстановиться после родов' },
      {
        id: 4,
        text: 'Увеличить свою силу, выносливость и приостановить старение организма',
      },
      { id: 5, text: 'Получить рельефное тело и увеличить мышечную массу' },
      { id: 6, text: 'Нормализовать работу лимфы и уменьшить отечность' },
      { id: 7, text: 'Избавиться от болей в спине' },
      { id: 8, text: 'Прокачать интимные мышцы' },
    ],
  },
  ukr: {
    title: 'Цiлi',
    content:
      'ЄМС підходить для тих, хто цінує свій час і хоче прийти у форму безпечно і не виснажуючи себе',
    content2:
      'Тепер спортивне тіло мрії можна отримати набагато простіше та швидше.',
    content3: 'За допомогою регулярних тренувань ви зможете:',
    li: [
      {
        id: 1,
        text: 'Позбутися зайвих кілограмів та підтримувати свою ідеальну фігуру',
      },
      {
        id: 2,
        text: 'Позбутися “апельсинової кірки” навіть у “складних” місцях',
      },
      { id: 3, text: 'Швидко відновитись після пологів' },
      {
        id: 4,
        text: 'Збільшити свою силу, витривалість та призупинити старіння організму',
      },
      { id: 5, text: 'Отримати рельєфне тіло та збільшити мязову масу' },
      { id: 6, text: 'Нормалізувати роботу лімфи та зменшити набряклість' },
      { id: 7, text: 'Позбутися болю в спині' },
      { id: 8, text: 'Прокачати інтимні мязи' },
    ],
  },
};

export default function Goals({ onSingUpModalOpen }) {
  const { t } = useI18next();

  const dat = t('text', { returnObjects: true });

  console.log('dat', dat);

  const items = [
    t('text1'),
    t('text2'),
    t('text3'),
    t('text4'),
    t('text5'),
    t('text6'),
    t('text7'),
    t('text8'),
  ];

  console.log('items', items);

  return (
    <Section
      titleLevel="h2"
      head={t('title')}
      darkBackground={true}
      containerClass={s.container}
    >
      <div className={s.suptitlesWrapper}>
        <p className={s.subtitle}>{data.ru.content}</p>
        <p className={s.subtitle}>{data.ru.content2}</p>
        <p className={s.subtitle}>{data.ru.content3}</p>
      </div>

      <ul className={s.list}>
        {sortItems(items).map((item, idx) => (
          <li className={s.item} key={idx}>
            {item}
          </li>
        ))}
      </ul>

      <Button
        classType={1}
        addClass={s.button}
        onBtnClick={onSingUpModalOpen}
      />

      <div className={s.lightningUp}></div>
      <div className={s.lightningDown}></div>
    </Section>
  );
}
