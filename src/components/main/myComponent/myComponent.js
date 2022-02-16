import React, { useContext } from 'react';
import { PageFormatContext, format } from 'context/pageFormatContext';
import { usePaddingsValues } from 'hooks/usePaddingsValues';

import Section from 'components/common/section/section';

const styles = {
  response: { pt: 10, pb: 10 },
  mobile: { pt: 20, pb: 20 },
  tablet: { pt: 30, pb: 30 },
  desktop: { pt: 40, pb: 40 },
};

const MyComponent = () => {
  const pageFormat = useContext(PageFormatContext);

  const pad = usePaddingsValues(styles, pageFormat, format);

  return (
    <Section
      head="Заголовок моей секции"
      titleLevel="h2"
      pt={pad.pt}
      pb={pad.pb}
      darkBackground={false}
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        consectetur tempore ut dolorum magnam qui. Voluptatem nobis a nulla
        cupiditate! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Reprehenderit veniam distinctio, enim praesentium architecto, et, neque
        porro itaque laudantium nemo doloremque earum soluta repellendus aliquam
        voluptas dicta accusamus qui obcaecati.
      </p>
    </Section>
  );
};

export default MyComponent;
