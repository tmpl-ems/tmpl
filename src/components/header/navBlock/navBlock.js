import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { navList, navItem, navLink } from './navBlock.module.scss';

const data = {
  ru: [
    {
      name: 'about-us',
      title: 'о нас',
    },
    {
      name: 'goals',
      title: 'цели',
    },
    {
      name: 'clients-result',
      title: 'Результаты клиентов',
    },
    {
      name: 'feedbacks',
      title: 'отзывы',
    },
    {
      name: 'programs',
      title: 'программы',
    },
  ],

  ua: [
    {
      name: 'about-us',
      title: 'про нас',
    },
    {
      name: 'goals',
      title: 'цілі',
    },
    {
      name: 'clients-result',
      title: 'Результати кліентів',
    },
    {
      name: 'feedbacks',
      title: 'відгуки',
    },
    {
      name: 'programs',
      title: 'програми',
    },
  ],
};

const NavBlock = () => {
  return (
    <nav>
      <ul className={navList}>
        {data.ru.map(item => (
          <li className={navItem} key={item.name}>
            <ScrollLink
              to={item.name}
              className={navLink}
              smooth={true}
              duration={500}
            >
              {item.title}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBlock;
