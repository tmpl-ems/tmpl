import React from 'react';
import { navList, navItem, navLink } from './navBlock.module.scss';

const NavBlock = () => {
  const data = {
    ru: ['о нас', 'цели', 'Результаты клиентов', 'отзывы', 'программы'],
    ua: ['про нас', 'цілі', 'Результати кліентів', 'відгуки', 'програми'],
  };
  return (
    <nav>
      <ul className={navList}>
        {data.ru.map(item => (
          <li className={navItem}>
            <a className={navLink} href="#">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBlock;
