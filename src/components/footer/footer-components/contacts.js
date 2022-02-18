import React from 'react';
import * as s from '../footer.module.scss';

const Contacts = () => {
  return (
    <ul className={`${s.contactsList} list`}>
      <li className={`${s.contactItem}`}>
        <a href="tel:+380983446742" className={'link'}>
          + 38 (098) 344 67 42
        </a>
      </li>
      <li className={`${s.contactItem}`}>
        <a href="mailto:benefitstudio98@gmal.com" className={'link'}>
          benefitstudio98@gmal.com
        </a>
      </li>
      <li className={`${s.contactItem}`}>
        <address className={'link'}>г. Киев, ул. Антоновича 3, офис 3</address>
      </li>
    </ul>
  );
};
export default Contacts;
