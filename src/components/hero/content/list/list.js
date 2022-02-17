import React from 'react';
import * as s from './list.module.scss';

const List = () => {
  const data = {
    ru: [
      'Без тяжелых весов и нагрузок',
      'Прорабатывая все группы мышц',
      'Индивидуально с тренером',
      'Укрепляя здоровье',
    ],
    ua: [],
  };
  return (
    <div className={s.listContainer}>
      <ul className={s.list}>
        {data.ru.map((item, i) => (
          <li key={i} className={s.listItem}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
