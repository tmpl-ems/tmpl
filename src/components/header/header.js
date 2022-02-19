import React, { useContext, useState } from 'react';
import { Link } from 'gatsby';
import { duration } from 'styles/jsVars';

// Если в нашем компоненте нужно выполнить или нет рендеринг в зависимости от ширины экрана, берём испортируем контекст и формат. А такэе useContext
import { PageFormatContext, format } from 'context/pageFormatContext';
import Container from 'components/common/container/container';

import LogoIcon from 'images/svg/logo.svg';
import BurgerIcon from 'images/svg/button-burger.svg';
import DropNav from './dropNav/dropNav';
import NavBlock from './navBlock/navBlock';
import LanguagesBlock from './languagesBlock/languagesBlock';
import {
  header,
  headerContainer,
  logoLink,
  burgerOpenBtn,
} from './header.module.scss';

export default function Header() {
  const pageFormat = useContext(PageFormatContext);
  const isDesktop = pageFormat === format.desktop;
  const [isShow, setIsShow] = useState(false);
  const [showDropNav, setShowDropNav] = useState(false);

  const openDropNav = () => {
    setShowDropNav(true);
    setIsShow(true);
    window.addEventListener('keydown', closeDropNav);
    document.body.style.overflow = 'hidden';
  };

  const closeDropNav = e => {
    if (e.code === 'Escape') {
      window.removeEventListener('keydown', closeDropNav);
    }
    setIsShow(false);
    setTimeout(() => {
      setShowDropNav(false);
      document.body.style.overflow = '';
    }, duration);
  };

  return (
    <header className={header} id="header">
      <Container addClass={headerContainer}>
        {/* //----logo------ */}
        <Link to="/" className={logoLink}>
          <LogoIcon width="74" height="66" />
        </Link>
        {isDesktop && <NavBlock />}
        {/* <div className={navMobileBlock}> */}
        <LanguagesBlock />
        {/* //---BurgerBtn--- */}
        {!isDesktop && (
          <button
            className={burgerOpenBtn}
            type="button"
            onClick={openDropNav}
            aria-label="Кнопка открытия мобильного меню"
            aria-expanded={showDropNav}
            aria-controls="mobile-menu"
          >
            <BurgerIcon width="30" height="16" />
          </button>
        )}
        {/* </div> */}
      </Container>
      {!isDesktop && showDropNav && (
        <DropNav onClick={closeDropNav} isShow={isShow} />
      )}
    </header>
  );
}
