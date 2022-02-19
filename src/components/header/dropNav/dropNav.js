import React from 'react';
import { Link } from 'gatsby';

import CloseIcon from 'images/svg/btn-close.svg';
import LogoIcon from 'images/svg/logo.svg';
import NavBlock from '../navBlock/navBlock';

import { backdrop, closeIcon, closeBtn, logoLink } from './dropNav.module.scss';
import Container from 'components/common/container/container';

const DropNav = ({ onClick }) => {
  return (
    <div id="mobile-menu">
      <Container addClass={backdrop}>
        {/* ---CloseBtn--- */}
        <button className={closeBtn} type="button" onClick={onClick}>
          <CloseIcon width="18" height="18" className={closeIcon} />
        </button>

        {/* ----logo------ */}
        <Link to="/" className={logoLink}>
          <LogoIcon width="74" height="66" />
        </Link>

        <NavBlock onModalClose={onClick} />
      </Container>
    </div>
  );
};

export default DropNav;
