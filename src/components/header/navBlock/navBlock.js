import React from 'react';
import { navList, navItem, navLink } from './navBlock.module.scss';

const NavBlock = () => {
  return (
    <nav>
      <ul className={navList}>
        <li className={navItem}>
          <a className={navLink} href="#">
            О нас
          </a>
        </li>
        <li className={navItem}>
          <a className={navLink} href="#">
            Цели
          </a>
        </li>
        <li className={navItem}>
          <a className={navLink} href="#">
            Результаты клиентов
          </a>
        </li>
        <li className={navItem}>
          <a className={navLink} href="#">
            Отзывы
          </a>
        </li>
        <li className={navItem}>
          <a className={navLink} href="#">
            Программы
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBlock;
