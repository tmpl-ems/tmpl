import React, { useEffect, useState } from 'react';
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

/* 
How to use

type: указывает type кнопки, 'button' или 'submit' 
classType: число 1, 2 или 3, в зависимости от типа кнопки
text: этот проп содержит текст кнопки (по умолчанию уже указано "Записаться", поэтому это необязательный проп)
*/

const Button = ({ type = 'button', classType = 1, text, ...props }) => {
  const [nameOfClass, setNameOfClass] = useState(s.btn1);

  useEffect(() => {
    const getClass = classType => {
      const classKey = Object.keys(s).filter(key => key.includes(classType))[0];
      const name = s[classKey] ?? s.btn1;
      setNameOfClass(name);
    };
    getClass(classType);
  }, [classType]);

  return (
    <button type={type} className={nameOfClass} {...props}>
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
