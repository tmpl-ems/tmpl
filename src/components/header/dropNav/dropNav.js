import React from 'react';

import CloseIcon from 'images/svg/btn-close.svg';
import LogoIcon from 'images/svg/logo.svg';
import NavBlock from '../navBlock/navBlock';

import {
  backdrop,
  container,
  closeBtn,
  navBlock,
  logoLink,
} from './dropNav.module.scss';

const DropNav = ({ onClick }) => {
  return (
    <div className={backdrop}>
      {/* ---CloseBtn--- */}
      <div className={container}>
        <button className={closeBtn} type="button" onClick={onClick}>
          <CloseIcon width="18" height="18" />
        </button>

        <div className={navBlock}>
          {/* ----logo------ */}
          <a href="#" className={logoLink}>
            <LogoIcon width="74" height="66" />
          </a>
          <NavBlock />
        </div>
      </div>
    </div>
  );
};

export default DropNav;
