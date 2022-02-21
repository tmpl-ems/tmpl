import React from 'react';

import Logo from 'images/svg/logo.svg';

import MapGoogle from './footer-components/MapGoogle/MapGoogle';
// in case Google Maps won't support
// import MapBackground from './footer-components/mapBackground';
import Contacts from './footer-components/contacts';
import Networks from './footer-components/networksList';
import CopyRightBlock from './footer-components/copyRight';

import * as s from './footer.module.scss';
import Container from 'components/common/container/container';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.footerWrapper}>
          <MapGoogle />
          {/* <MapBackground /> */}
          <div>
            <Logo className={`${s.logo}`} />
            {/* Contacts list */}
            <Contacts />
            {/* Social networks links */}
            <Networks />
          </div>
        </div>
        <CopyRightBlock />
      </Container>
    </footer>
  );
};

export default Footer;
