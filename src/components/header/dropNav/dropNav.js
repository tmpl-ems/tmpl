import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';

import CloseIcon from 'images/svg/btn-close.svg';
import LogoIcon from 'images/svg/logo.svg';
import NavBlock from '../navBlock/navBlock';

import {
  backdrop,
  closeIcon,
  closeBtn,
  logoLink,
  show,
} from './dropNav.module.scss';
import Container from 'components/common/container/container';

const DropNav = ({ onClick, isShow }) => {
  const [showComp, setShowComp] = useState(false);
  const { t } = useI18next();

  const data = t('aria', { returnObjects: true });

  useEffect(() => {
    setShowComp(isShow);
  }, [isShow]);

  return (
    <div id="mobile-menu">
      <Container addClass={`${backdrop} ${showComp && show}`}>
        {/* ---CloseBtn--- */}
        <button
          className={closeBtn}
          type="button"
          onClick={onClick}
          aria-label={data.closeBtn}
          aria-expanded={showComp}
          aria-controls="mobile-menu"
        >
          <CloseIcon width="18" height="18" className={closeIcon} />
        </button>

        {/* ----logo------ */}
        <Link to="/" className={logoLink}>
          <LogoIcon width="74" height="66" />
        </Link>

        <NavBlock onMenuClose={onClick} />
      </Container>
    </div>
  );
};

export default DropNav;
