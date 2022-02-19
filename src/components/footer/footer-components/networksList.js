import React from 'react';
import * as s from '../footer.module.scss';
import Telegram from 'images/svg/footer-telegram.svg';
import Youtube from 'images/svg/footer-youtube.svg';
import Facebook from 'images/svg/footer-facebook.svg';
import Instagram from 'images/svg/footer-instagram.svg';

const Networks = () => {
  const data = [
    {
      id: 'Telegram',
      href: '@goitmarathon_bot',
      svg: <Telegram />,
    },
    {
      id: 'Youtube',
      href: '@goitmarathon_bot',
      svg: <Youtube />,
    },
    {
      id: 'Facebook',
      href: '@goitmarathon_bot',
      svg: <Facebook />,
    },
    {
      id: 'Instagram',
      href: '@goitmarathon_bot',
      svg: <Instagram />,
    },
  ];
  return (
    <div className={`${s.mediaWrapper}`}>
      <ul className={`${s.mediaList} list`}>
        {data.map(item => (
          <li key={item.id}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className={`${s.mediaItem} link`}
            >
              {item.svg}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Networks;
