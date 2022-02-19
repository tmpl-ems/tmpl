import React from 'react';
import * as s from './advantages.module.scss';
import Section from 'components/common/section/section';
import AdvIcon1 from 'images/svg/adv-comfort.svg';
import AdvIcon3 from 'images/svg/adv-motivation.svg';
import AdvIcon4 from 'images/svg/adv-result.svg';
import AdvIcon2 from 'images/svg/adv-safety.svg';

export default function Advantages() {
  return (
    <>
      <Section titleLevel="h2">
        <div className={s.container}>
          <div className={s.head}>
            <p className={s.info}>
              Ваше тело ваш храм. Позаботьтесь о нем сейчас с помощью тренировок
              в TMPL, чтобы оно было здоровым и служило вам как дольше.
            </p>
            <h3 className={s.mainTitle}>Тренировки в TMPL — это</h3>
          </div>
          <ul className={`${s.mainList} list`}>
            <li className={s.mainItem}>
              <AdvIcon1 className={s.icon} />
              <h4 className={s.title}>Комфорт</h4>
              <ul className={`${s.list} list`}>
                <li className={s.item}>— Студия в центре Киева</li>
                <li className={s.item}>
                  — Современное немецкое оборудование Miha Bodytec
                </li>
                <li className={s.item}>
                  — Выездные тренировки в офис и на дом
                </li>
                <li className={s.item}>
                  — Тренировочная программа разрабатывается под вас
                </li>
              </ul>
            </li>
            <li className={s.mainItem}>
              <AdvIcon2 className={s.icon} />
              <h4 className={s.title}>Безопасность</h4>
              <ul className={`${s.list} list`}>
                <li className={s.item}>
                  — Все тренеры с профессиональным образованием
                </li>
                <li className={s.item}>
                  — В студии работают только квалифицированные реабилитологи
                </li>
                <li className={s.item}>
                  — Занятия 1 на 1 с тренером, всё внимание только вам
                </li>
              </ul>
            </li>
            <li className={s.mainItem}>
              <AdvIcon3 className={s.icon} />
              <h4 className={s.title}>Мотивация</h4>
              <ul className={`${s.list} list`}>
                <li className={s.item}>
                  — Проработка ментальных установок, которые не дают сбросить
                  лишний вес
                </li>
                <li className={s.item}>— Заряд на 100% и хорошее настроение</li>
                <li className={s.item}>— Новое интересное окружение</li>
              </ul>
            </li>
            <li className={s.mainItem}>
              <AdvIcon4 className={s.icon} />
              <h4 className={s.title}>Видимый результат</h4>
              <ul className={`${s.list} list`}>
                <li className={s.item}>— Эффект с 4-й тренировки</li>
                <li className={s.item}>
                  В 5-18 раз эффективнее тренировок в зале
                </li>
              </ul>
            </li>
          </ul>
          <p className={s.result}>
            За 3 года работы мы помогли создать спортивную фигуру и укрепить
            здоровье более 1000 клиентам.
          </p>
        </div>
      </Section>
    </>
  );
}
