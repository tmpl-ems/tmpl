import React from 'react';
import * as s from './AboutUsSection.module.scss';

import Container from 'components/common/section/section';

const AboutUsSection = () => {
  return (
      <Container>
        <h2 className={s.aboutSectionTitle}>О нас</h2>
        <p className={s.aboutSectionDescription}>ЕМS — инновационная технология в мире спорта.
          Система создает импульсы для сокращения мышц, идентичные тем,
          которые генерирует наш мозг при силовой тренировке.
        </p>
        <p className={s.aboutSectionText}>Чем отличаются тренировки в обычном зале и по системе EMS на пути к вашей фигуре мечты:</p>
        <div className={s.aboutSectionCompareList}>
          <h3>Тренировки в зале</h3>
          <ul>
            <li>Тяжелые изматывающие упражнения</li>
            <li>Есть риск травмирования из-за высоких нагрузок и неправильного выполнения упражнений</li>
            <li>Уходит от 1 до 2 часов на тренировку</li>
            <li>Задействуется до 35% мышц</li>
            <li>Нужен минимум месяц, чтобы был заметен результат</li>
          </ul>
        </div>
        <div className={s.aboutSectionCompareList}>
          <h3>Тренировки EMS</h3>
          <ul>
            <li>Умеренные упражнения без тяжелых весов</li>
            <li>Это не травмоопасно</li>
            <li>Тренировка занимает всего 30 минут</li>
            <li>В 1 тренировке задействуется 90% мышц</li>
            <li>Результат будет заметен уже через 4 тренировки (2 недели)</li>
          </ul>
        </div>
      <p>2 ЕМС-тренировки в неделю по 30 минут  — и ваше тело станет подтянутым, уйдет лишняя жидкость и токсины, улучшится самочувствие и сон, повысится уровень стрессоустойчивости и здоровье организма в целом. 
</p>
      </Container>
  )
}

export default AboutUsSection;