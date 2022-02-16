import React from 'react';
import {
  advantages,
  advantages__title,
  advantages__list,
  advantages__titleList,
  advantages__result,
  advantages__mainList,
} from './advantages.module.scss';
import Section from 'components/common/section/section';

export default function Advantages() {
  return (
    <>
      <section className="section">
        <div className={advantages}>
          <div className={advantages__title}>
            <h1 className="visually-hidden">Advantages</h1>
            <p>
              Ваше тело ваш храм. Позаботьтесь о нем сейчас с помощью тренировок
              в TMPL, чтобы оно было здоровым и служило вам как дольше.
            </p>
            <p>Тренировки в TMPL — это</p>
          </div>
          <ul className={`${advantages__mainList} list`}>
            <li>
              <img src="#" alt="" />
              <p className={advantages__titleList}>Комфорт</p>
              <ul className={`${advantages__list} list`}>
                <li>— Студия в центре Киева</li>
                <li>— Современное немецкое оборудование Miha Bodytec</li>
                <li>— Выездные тренировки в офис и на дом</li>
                <li>— Тренировочная программа разрабатывается под вас</li>
              </ul>
            </li>
            <li>
              <img src="#" alt="" />
              <p className={advantages__titleList}>Безопасность</p>
              <ul className={`${advantages__list} list`}>
                <li>— Все тренеры с профессиональным образованием</li>
                <li>
                  — В студии работают только квалифицированные реабилитологи
                </li>
                <li>— Занятия 1 на 1 с тренером, всё внимание только вам</li>
              </ul>
            </li>
            <li>
              <img src="#" alt="" />
              <p className={advantages__titleList}>Мотивация</p>
              <ul className={`${advantages__list} list`}>
                <li>
                  — Проработка ментальных установок, которые не дают сбросить
                  лишний вес
                </li>
                <li>— Заряд на 100% и хорошее настроение</li>
                <li>— Новое интересное окружение</li>
              </ul>
            </li>
            <li>
              <img src="#" alt="" />
              <p className={advantages__titleList}>Видимый результат</p>
              <ul className={`${advantages__list} list`}>
                <li>— Эффект с 4-й тренировки</li>
                <li>В 5-18 раз эффективнее тренировок в зале</li>
              </ul>
            </li>
          </ul>
          <p className={advantages__result}>
            За 3 года работы мы помогли создать спортивную фигуру и укрепить
            здоровье более 1000 клиентам.
          </p>
        </div>
      </section>
    </>
  );
}
