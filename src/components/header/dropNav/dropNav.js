import React from 'react';

import CloseIcon from 'images/svg/btn-close.svg';
import LogoIcon from 'images/svg/logo.svg';
import NavBlock from '../navBlock/navBlock';

import * as s from './dropNav.module.scss';

const DropNav = ({ onClick }) => {
  return (
    <div className={s.backdrop}>
      {/* ---CloseBtn--- */}
      <div className={s.containerInDrop}>
        <button className={s.closeBtn} type="button" onClick={onClick}>
          <CloseIcon width="18" height="18" />
        </button>

        <div className={s.navBlockInDrop}>
          {/* ----logo------ */}
          <a href="#" className={s.logoLinkInDrop}>
            <LogoIcon width="74" height="66" />
          </a>
          <NavBlock />
        </div>
      </div>
    </div>
  );
};

export default DropNav;
