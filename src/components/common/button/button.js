import React from 'react';
import * as s from './button.module.scss';

const Button = ({ type = 'button', classType = 1, children }) => {
  const getClass = classType => {
    switch (classType) {
      case 1:
        return s[`type${classType}`];
      case 2:
        return s[`type${classType}`];
      default:
        return s[`type1`];
    }
  };

  return (
    <button type={type} className={getClass(classType)}>
      {children}
    </button>
  );
};

export default Button;
