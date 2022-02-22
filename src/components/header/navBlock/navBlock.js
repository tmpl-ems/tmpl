import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { navList, navItem, navLink } from './navBlock.module.scss';
import { useI18next } from 'gatsby-plugin-react-i18next';

const NavBlock = ({ onMenuClose }) => {
  const { t, path } = useI18next();
  const data = t('header', { returnObjects: true });

  return (
    <nav>
      <ul className={navList}>
        {data.nav.map(item => (
          <li className={navItem} key={item.name} onClick={onMenuClose}>
            <AnchorLink
              to={`${path}#${item.name}`}
              title={item.title}
              duration={1000}
              className={navLink}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBlock;
