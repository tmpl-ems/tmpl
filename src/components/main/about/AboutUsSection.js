import React from 'react';

import Section from 'components/common/section/section';
import AboutUsList from './AboutUsList';

import * as s from './AboutUsSection.module.scss';

const data = {
  ru: {
    title: 'О нас',
    description: 'ЕМS — инновационная технология в мире спорта. Система создает импульсы для сокращения мышц, идентичные тем, которые генерирует наш мозг при силовой тренировке.',
    listPreTitle: 'Чем отличаются тренировки в обычном зале и по системе EMS на пути к вашей фигуре мечты:',
    gymListTitle: 'Тренировки в зале',
    gymListContent: ['Тяжелые изматывающие упражнения', 'Есть риск травмирования из-за высоких нагрузок и неправильного выполнения упражнений', 'Уходит от 1 до 2 часов на тренировку', 'Задействуется до 35% мышц', 'Нужен минимум месяц, чтобы был заметен результат'],
    EMSListTitle: 'Тренировки EMS',
    EMSListContent: ['Умеренные упражнения без тяжелых весов', 'Это не травмоопасно', 'Тренировка занимает всего 30 минут', 'В 1 тренировке задействуется 90% мышц', 'Результат будет заметен уже через 4 тренировки (2 недели)'],
    resultText: '2 ЕМС-тренировки в неделю по 30 минут  — и ваше тело станет подтянутым, уйдет лишняя жидкость и токсины, улучшится самочувствие и сон, повысится уровень стрессоустойчивости и здоровье организма в целом.'
  },
  ukr: {
    title: 'Про нас',
    description: 'ЕМS — інноваційна технологія у світі спорту. Система створює імпульси для скорочення м’язів, ідентичні тим, які генерує наш мозок під час силового тренування.',
    listPreTitle: 'Чим відрізняються тренування в звичайному залі і за системою EMS на шляху до вашої фігури мрії:',
    gymListTitle: 'Тренування в залі',
    gymListContent: ['Важкі виснажливі вправи', 'Є ризик травмування через високі навантаження та неправильне виконання вправ', 'Витрачається від 1 до 2 годин на тренування', 'Задіюється до 35% м\'язів', 'Потрібен мінімум місяць, щоб був помітний результат'],
    EMSListTitle: 'Тренування EMS',
    EMSListContent: ['Помірні вправи без важких вагів', 'Це не призводить до травм і повністю безпечно', 'Тренування займає лише 30 хвилин', 'У 1 тренуванні задіяно 90% м\'язів', 'Результат буде помітний вже через 4 тренування (2 тижні)'],
    resultText: '2 ЕМС-тренування на тиждень по 30 хвилин — і ваше тіло стане підтягнутим, зникне зайва рідина та токсини, покращиться самопочуття та сон, підвищиться рівень стресостійкості та здоров\'я організму в цілому.'
  },
};

const AboutUsSection = () => {
  return (
      <Section head={data.ru.title} titleLevel="h2">
      <div className={s.wrapper}>
        <p className={s.description}>{data.ru.description}</p>
        <p className={s.listPreTitle}>{data.ru.listPreTitle}</p>
        <div className={s.listBox}>
          <div className={s.listWrapper}>
            <h3 className={s.listTitle}>{data.ru.gymListTitle}</h3>
            <AboutUsList list={data.ru.gymListContent}/>
          </div>
          <div className={s.listWrapper}>
            <h3 className={s.listTitle}>{data.ru.EMSListTitle}</h3>
            <AboutUsList list={data.ru.EMSListContent}/>
          </div>
        </div>
        <p className={s.resultText}>{data.ru.resultText}</p>
        </div>
      </Section>
  )
}

export default AboutUsSection;