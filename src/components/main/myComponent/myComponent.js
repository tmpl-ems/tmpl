import React, { useContext } from 'react';
import { PageFormatContext, format } from 'context/pageFormatContext';
import { usePaddingsValues } from 'hooks/usePaddingsValues';
import { useI18next } from 'gatsby-plugin-react-i18next';

import Section from 'components/common/section/section';

const styles = {
  response: { pt: 10, pb: 10 },
  mobile: { pt: 20, pb: 20 },
  tablet: { pt: 30, pb: 30 },
  desktop: { pt: 40, pb: 40 },
};

const MyComponent = () => {
  const { t } = useI18next();

  const pageFormat = useContext(PageFormatContext);

  const pad = usePaddingsValues(styles, pageFormat, format);

  return (
    <Section
      head={t('hello')}
      titleLevel="h2"
      pt={pad.pt}
      pb={pad.pb}
      darkBackground={false}
    >
      <p>{t('par')}</p>
    </Section>
  );
};

export default MyComponent;
