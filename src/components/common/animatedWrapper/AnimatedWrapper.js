import React, { useEffect, useState } from 'react';
import * as s from './AnimatedWrapper.module.scss';

const AnimatedWrapper = ({ children }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (!show) {
      setTimeout(() => {
        setShow(true);
      }, 0);
    }
  }, [show]);

  return (
    <div className={`${s.container} ${show ? s.show : ''}`}>{children}</div>
  );
};

export default AnimatedWrapper;
