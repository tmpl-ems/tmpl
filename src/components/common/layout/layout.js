import React, { useState, useEffect } from 'react';
import { PageFormatContext, format } from 'context/pageFormatContext';

const breakPoints = {
  response: 479,
  mobile: 480,
  tablet: 768,
  desktop: 1280,
};

const Layout = ({ children }) => {
  const [pageFormat, setPageFormat] = useState(format.response);

  useEffect(() => {
    const onHandleResize = () => {
      const viewport = window.innerWidth;
      if (viewport < breakPoints.mobile && pageFormat !== format.response) {
        setPageFormat(format.response);
        return;
      }
      if (
        viewport >= breakPoints.mobile &&
        viewport < breakPoints.tablet &&
        pageFormat !== format.mobile
      ) {
        setPageFormat(format.mobile);
        return;
      }
      if (
        viewport >= breakPoints.tablet &&
        viewport < breakPoints.desktop &&
        pageFormat !== format.tablet
      ) {
        setPageFormat(format.tablet);
        return;
      }
      if (viewport >= breakPoints.desktop && pageFormat !== format.desktop) {
        setPageFormat(format.desktop);
        return;
      }
    };
    window.addEventListener('resize', onHandleResize);
    onHandleResize();
  }, [pageFormat]);

  return (
    <PageFormatContext.Provider value={pageFormat}>
      {children}
    </PageFormatContext.Provider>
  );
};

export default Layout;
