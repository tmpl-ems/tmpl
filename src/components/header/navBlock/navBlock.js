import React from 'react';
import * as s from './navBlock.module.scss';

const NavBlock = () => {
  const data = {
    ru: ['о нас', 'цели', 'Результаты клиентов', 'отзывы', 'программы'],
    ua: ['про нас', 'цілі', 'Результати кліентів', 'відгуки', 'програми'],
  };
  return (
    <nav>
      <ul className={s.navList}>
        {data.ru.map((item, i) => (
          <li key={i} className={s.navItem}>
            <a className={s.navLink} href="#">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBlock;
