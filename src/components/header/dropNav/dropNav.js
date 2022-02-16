import React from 'react';

import CloseIcon from 'images/svg/btn-close.svg';
import LogoIcon from 'images/svg/logo.svg';
import NavBlock from '../navBlock/navBlock';

import {
  backdrop,
  containerInDrop,
  closeBtn,
  navBlockInDrop,
  logoLinkInDrop,
} from './dropNav.module.scss';

const DropNav = ({ onClick }) => {
  return (
    <div className={backdrop}>
      {/* ---CloseBtn--- */}
      <div className={containerInDrop}>
        <button className={closeBtn} type="button" onClick={onClick}>
          <CloseIcon width="18" height="18" />
        </button>

        <div className={navBlockInDrop}>
          {/* ----logo------ */}
          <a href="#" className={logoLinkInDrop}>
            <LogoIcon width="74" height="66" />
          </a>
          <NavBlock />
        </div>
      </div>
    </div>
  );
};

export default DropNav;
