import React from 'react';

import CloseIcon from 'images/svg/btn-close.svg';
import LogoIcon from 'images/svg/logo.svg';
import NavBlock from '../navBlock/navBlock';

import { backdrop, closeIcon, closeBtn, logoLink } from './dropNav.module.scss';
import Container from 'components/common/container/container';

const DropNav = ({ onClick }) => {
  return (
    <Container addClass={backdrop}>
      {/* ---CloseBtn--- */}
      <button className={closeBtn} type="button" onClick={onClick}>
        <CloseIcon width="18" height="18" className={closeIcon} />
      </button>

      {/* ----logo------ */}
      <a href="/" className={logoLink}>
        <LogoIcon width="74" height="66" />
      </a>
      <NavBlock />
    </Container>
  );
};

export default DropNav;
