import React from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';
import * as s from '../footer.module.scss';

const Contacts = () => {
  const { t } = useI18next();
  const data = t('footer', { returnObjects: true });
  return (
    <ul className={`${s.contactsList} list`}>
      <li className={`${s.contactItem}`}>
        <a href="tel:+380983446742" className={`link ${s.link}`}>
          + 38 (098) 344 67 42
        </a>
      </li>
      <li className={`${s.contactItem}`}>
        <a href="mailto:benefitstudio98@gmal.com" className={`link ${s.link}`}>
          benefitstudio98@gmal.com
        </a>
      </li>
      <li className={`${s.contactItem}`}>
        <address className={'link'}>{data.address}</address>
      </li>
    </ul>
  );
};
export default Contacts;
