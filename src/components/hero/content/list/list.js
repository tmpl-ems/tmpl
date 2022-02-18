import React from 'react';
import * as s from './list.module.scss';

const List = () => {
  const data = {
    ru: [
      'Без тяжелых весов и нагрузок',
      'Индивидуально с тренером',
      'Прорабатывая все группы мышц',
      'Укрепляя здоровье',
    ],
    ua: [],
  };
  return (
    <ul className={s.list}>
      {data.ru.map((item, i) => (
        <li key={i} className={s.listItem}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default List;
