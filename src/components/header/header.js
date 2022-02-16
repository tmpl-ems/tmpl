import React, { useContext, useState } from 'react';

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
  navMobileBlock,
  logoLink,
  burgerOpenBtn,
} from './header.module.scss';

export default function Header() {
  // забираем значение ширины экрана, которое высчитывается в компоненте Layout и реализуем рендеринг по условию
  const pageFormat = useContext(PageFormatContext);
  const isDesktop = pageFormat === format.desktop;
  const [showDropNav, setShowDropNav] = useState(false);

  const openDropNav = () => {
    setShowDropNav(true);
    window.addEventListener('keydown', closeDropNav);
  };

  const closeDropNav = e => {
    if (e.code === 'Escape') {
      window.removeEventListener('keydown', closeDropNav);
    }
    setShowDropNav(false);
  };

  return (
    <header className={header} id="header">
      <Container>
        <div className={headerContainer}>
          {/* //----logo------ */}
          <a href="#header" className={logoLink}>
            <LogoIcon width="74" height="66" />
          </a>

          {isDesktop && <NavBlock />}
          <div className={navMobileBlock}>
            <LanguagesBlock />
            {/* //---BurgerBtn--- */}
            {!isDesktop && (
              <button
                className={burgerOpenBtn}
                type="button"
                onClick={openDropNav}
              >
                <BurgerIcon width="30" height="16" />
              </button>
            )}
          </div>
        </div>
      </Container>
      {showDropNav && <DropNav onClick={closeDropNav} />}
    </header>
  );
}

//export default Header;
