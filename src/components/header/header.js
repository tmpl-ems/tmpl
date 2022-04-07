import React, { useContext, useState, useRef, useEffect } from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { Link } from 'gatsby';
import { duration } from 'styles/jsVars';
import AnimatedWrapper from 'components/common/animatedWrapper/AnimatedWrapper';

// Если в нашем компоненте нужно выполнить или нет рендеринг в зависимости от ширины экрана, берём испортируем контекст и формат. А такэе useContext
import { PageFormatContext, format } from 'context/pageFormatContext';
import Container from 'components/common/container/container';

import LogoIcon from 'images/svg/logo.inline.svg';
import BurgerIcon from 'images/svg/button-burger.inline.svg';
import DropNav from './dropNav/dropNav';
import NavBlock from './navBlock/navBlock';
import LanguagesBlock from './languagesBlock/languagesBlock';
import * as s from './header.module.scss';

export default function Header({ getElToScroll }) {
  const pageFormat = useContext(PageFormatContext);
  const isDesktop = pageFormat === format.desktop;
  const [isShow, setIsShow] = useState(false);
  const [showDropNav, setShowDropNav] = useState(false);
  const elToScroll = useRef(null);
  const { t } = useI18next();

  const data = t('aria', { returnObjects: true });

  const openDropNav = () => {
    setShowDropNav(true);
    setIsShow(true);
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
  };

  const handleKeyDown = e => {
    if (e.code !== 'Escape') return;
    window.removeEventListener('keydown', handleKeyDown);
    closeDropNav();
  };

  const closeDropNav = () => {
    setIsShow(false);
    setTimeout(() => {
      setShowDropNav(false);
      document.body.style.overflow = '';
    }, duration);
  };

  useEffect(() => {
    getElToScroll(elToScroll.current);
  }, [getElToScroll]);

  return (
    <header className={s.header} id="header" ref={elToScroll}>
      <Container addClass={s.headerContainer}>
        {/* //----logo------ */}
        <Link to="/" className={s.logoLink}>
          <LogoIcon width="74" height="66" />
        </Link>
        {pageFormat && (
          <>
            <AnimatedWrapper addStyle={{ display: 'flex' }}>
              {isDesktop && <NavBlock onMenuClose={closeDropNav} />}
              <LanguagesBlock />
              {/* //---BurgerBtn--- */}
              {!isDesktop && (
                <button
                  className={s.burgerOpenBtn}
                  type="button"
                  onClick={openDropNav}
                  aria-label={data.openBtn}
                >
                  <BurgerIcon width="30" height="16" />
                </button>
              )}
            </AnimatedWrapper>
          </>
        )}
        {/* </div> */}
      </Container>
      {!isDesktop && showDropNav && (
        <DropNav onClick={closeDropNav} isShow={isShow} />
      )}
    </header>
  );
}
