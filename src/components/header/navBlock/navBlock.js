import React from 'react';
import { navList, navItem, navLink } from './navBlock.module.scss';

const data = {
  ru: [
    'о нас',
    'цели',
    'Результаты клиентов',
    'отзывы',
    'программы',
    'Результаты клиентов',
  ],
  ua: ['про нас', 'цілі', 'Результати кліентів', 'відгуки', 'програми'],
};

const NavBlock = () => {
  return (
    <nav>
      <ul className={navList}>
        {data.ru.map(item => (
          <li className={navItem}>
            <a className={navLink} href="/">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBlock;
