import React from 'react';
//import React, { useContext } from 'react';
import * as s from './goals.module.scss';
import GoalsItem from 'images/svg/goals-list-mark-tick.svg';
import GoalsLightning2 from 'images/goals/lightning-down-desktop.png';
import GoalsLightning1 from 'images/goals/lightning-up-desktop.png';

//import { PageFormatContext, format } from 'context/pageFormatContext';

// Если в нашем компоненте нужно выполнить или нет рендеринг в зависимости от ширины экрана, берём испортируем контекст и формат. А такэе useContext
//import { PageFormatContext, format } from 'context/pageFormatContext';
import Section from 'components/common/section/Section';

// Пример использования СВГ
//import LogoIcon from 'images/svg/logo.svg';
//import Button from 'components/common/button/button';
//import Title from 'components/common/title/title';

// Пример организации данных, можете напрямую в конпонент писать, но в будущем, вероятнее всего нужно будет выносить весть текст в отдельные json файлы и струкрута будет примерно такой.
const data = {
  ru: {
    title: 'Цели',
    content:
      'ЕМС подходит для тех, кто ценит свое время и хочет прийти в форму безопасно и не изнуряя себя ',
    content2:
      'Теперь спортивное тело мечты можно получить намного проще и быстрее.',
    content3: 'С помощью регулярных тренировок вы сможете:',

    li1: 'Избавиться от лишних килограммов и поддерживать свою идеальную фигуру',
    li2: 'Избавиться от “апельсиновой корки” даже в самых “сложных” местах',
    li3: 'Быстро восстановиться после родов',
    li4: 'Увеличить свою силу, выносливость и приостановить старение организма',
    li5: 'Получить рельефное тело и увеличить мышечную массу',
    li6: 'Нормализовать работу лимфы и уменьшить отечность',
    li7: 'Избавиться от болей в спине',
    li8: 'Прокачать интимные мышцы',
  },
  ukr: {
    title: 'Цiлi',
    content:
      'ЄМС підходить для тих, хто цінує свій час і хоче прийти у форму безпечно і не виснажуючи себе',
    content2:
      'Тепер спортивне тіло мрії можна отримати набагато простіше та швидше.',
    content3: 'За допомогою регулярних тренувань ви зможете:',
    li1: 'Позбутися зайвих кілограмів та підтримувати свою ідеальну фігуру',
    li2: 'Позбутися “апельсинової кірки” навіть у “складних” місцях',
    li3: 'Швидко відновитись після пологів',
    li4: 'Збільшити свою силу, витривалість та призупинити старіння організму',
    li5: 'Отримати рельєфне тіло та збільшити мязову масу',
    li6: 'Нормалізувати роботу лімфи та зменшити набряклість',
    li7: 'Позбутися болю в спині',
    li8: 'Прокачати інтимні мязи',
  },
};

export default function Goals() {
  // забираем значение ширины экрана, которое высчитывается в компоненте Layout и реализуем рендеринг по условию

  //const pageFormat = useContext(PageFormatContext);
  //const isTablet = pageFormat === format.tablet;
  //const isDesktop = pageFormat === format.desktop;

  return (
    <Section titleLevel="h2" head={data.ru.title} darkBackground={true}>
      {/* <div className={s.imagetop}>
        <img src={GoalsLightning1} alt="" />
      </div> */}

      <p className={s.subtitle}>{data.ru.content}</p>
      <p className={s.subtitle}>{data.ru.content2}</p>
      <p className={s.subtitle}>{data.ru.content3}</p>

      <ul className={s.list}>
        <li className={s.item}>{data.ru.li1}</li>
        <li className={s.item}>{data.ru.li2}</li>
        <li className={s.item}>{data.ru.li3}</li>
        <li className={s.item}>{data.ru.li4}</li>
        <li className={s.item}>{data.ru.li5}</li>
        <li className={s.item}>{data.ru.li6}</li>
        <li className={s.item}>{data.ru.li7}</li>
        <li className={s.item}>{data.ru.li8}</li>
      </ul>

      <div className={s.button}>
        <button type="button" className={s.goalsButton}>
          Записаться
        </button>
      </div>

      {/* <div className={s.imagebottom}>
        <img src={GoalsLightning2} alt="" />
      </div> */}

      {/* <Button classType={3} onClick={() => closeInfoModal()} />*/}
    </Section>
  );
}
