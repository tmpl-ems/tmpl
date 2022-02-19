
import React, { useContext } from 'react';
import { PageFormatContext, format } from 'context/pageFormatContext';
import { usePaddingsValues } from 'hooks/usePaddingsValues';
import Section from 'components/common/section/section';
import Logo from 'images/svg/logo.svg';


import Map from './footer-components/map';
import Contacts from './footer-components/contacts';
import Networks from './footer-components/networksList';
import CopyRightBlock from './footer-components/copyRight';

import * as s from './footer.module.scss';

const styles = {
  response: { pt: 32, pb: 16 },
  mobile: { pt: 32, pb: 16 },
  tablet: { pt: 60, pb: 16 },
  desktop: { pt: 60, pb: 16 },
};

const Footer = () => {
  const pageFormat = useContext(PageFormatContext);
  const pad = usePaddingsValues(styles, pageFormat, format);
  return (
    <footer>
      <Section darkBackground={true} pt={pad.pt} pb={pad.pb}>
        <div className={`${s.footerWrapper}`}>
          <Map />
          <div>
            <Logo className={`${s.logo}`} />
            {/* Contacts list */}
            <Contacts />
            {/* Social networks links */}
            <Networks/>
          </div>
        </div>
       <CopyRightBlock/>
      </Section>
    </footer>
  );
};

export default Footer;
