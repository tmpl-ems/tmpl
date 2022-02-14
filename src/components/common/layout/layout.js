import React, { useState, useEffect } from 'react';

const breakPoints = {
  response: 479,
  mobile: 480,
  tablet: 768,
  desktop: 1280,
};

const Layout = ({ children }) => {
  const [pageFormat, setPageFormat] = useState('response');

  useEffect(() => {
    const onHandleResize = () => {
      const viewport = window.innerWidth;
      if (viewport < breakPoints.mobile && pageFormat !== 'response') {
        setPageFormat('response');
        return;
      }
      if (
        viewport >= breakPoints.mobile &&
        viewport < breakPoints.tablet &&
        pageFormat !== 'mobile'
      ) {
        setPageFormat('mobile');
        return;
      }
      if (
        viewport >= breakPoints.tablet &&
        viewport < breakPoints.desktop &&
        pageFormat !== 'tablet'
      ) {
        setPageFormat('tablet');
        return;
      }
      if (viewport >= breakPoints.desktop && pageFormat !== 'desktop') {
        setPageFormat('desktop');
        return;
      }
    };
    window.addEventListener('resize', onHandleResize);
    onHandleResize();
  }, [pageFormat]);

  return <>{children}</>;
};

export default Layout;
