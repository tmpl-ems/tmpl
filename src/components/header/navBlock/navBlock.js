import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { navList, navItem, navLink } from './navBlock.module.scss';
import { useI18next } from 'gatsby-plugin-react-i18next';

// const data = {
//   ru: [
//     {
//       name: 'about-us',
//       title: 'о нас',
//     },
//     {
//       name: 'goals',
//       title: 'цели',
//     },
//     {
//       name: 'clients-result',
//       title: 'Результаты клиентов',
//     },
//     {
//       name: 'feedbacks',
//       title: 'отзывы',
//     },
//     {
//       name: 'programs',
//       title: 'программы',
//     },
//   ],

//   ua: [
//     {
//       name: 'about-us',
//       title: 'про нас',
//     },
//     {
//       name: 'goals',
//       title: 'цілі',
//     },
//     {
//       name: 'clients-result',
//       title: 'Результати кліентів',
//     },
//     {
//       name: 'feedbacks',
//       title: 'відгуки',
//     },
//     {
//       name: 'programs',
//       title: 'програми',
//     },
//   ],
// };

const NavBlock = ({ onModalClose }) => {
  const { t, path } = useI18next();
  const data = t('header', { returnObjects: true });

  return (
    <nav>
      <ul className={navList}>
        {data.nav.map(item => (
          <li className={navItem} key={item.name} onClick={onModalClose}>
            <AnchorLink
              to={`${path}#${item.name}`}
              title={item.title}
              duration={250}
              className={navLink}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBlock;
