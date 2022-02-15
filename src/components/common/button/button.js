import React from 'react';
import PropTypes from 'prop-types';
import * as s from './button.module.scss';

const data = {
  ru: {
    text: 'Записаться',
  },
  ukr: {
    text: 'Записатися',
  },
};

const Button = ({ type = 'button', classType = 1, text }) => {
  const getClass = classType => {
    const classKey = Object.keys(s).filter(key => key.includes(classType))[0];
    return s[classKey] ?? s.btn1;
  };

  return (
    <button type={type} className={getClass(classType)}>
      {text ? text : data.ru.text}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  classType: PropTypes.number,
  text: PropTypes.string,
};

export default Button;
