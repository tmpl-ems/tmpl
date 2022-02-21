import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useI18next } from 'gatsby-plugin-react-i18next';
import * as s from './button.module.scss';

/* 
How to use

type: указывает type кнопки, 'button' или 'submit' 
classType: число 1, 2 или 3, в зависимости от типа кнопки
text: этот проп содержит текст кнопки (по умолчанию уже указано "Записаться", поэтому это необязательный проп)
*/

const Button = ({
  type = 'button',
  classType = 1,
  text,
  addClass,
  onBtnClick,
  ...props
}) => {
  const [nameOfClass, setNameOfClass] = useState(s.btn1);
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useI18next();
  const data = t('common', { returnObjects: true });

  useEffect(() => {
    const getClass = classType => {
      const classKey = Object.keys(s).filter(key => key.includes(classType))[0];
      const name = s[classKey] ?? s.btn1;
      setNameOfClass(name);
    };
    getClass(classType);
  }, [classType]);

  const handleClick = () => {
    setIsExpanded(true);
    if (!onBtnClick) return;
    onBtnClick();
  };

  return (
    <button
      type={type}
      className={`${nameOfClass} ${addClass}`}
      onClick={handleClick}
      aria-expanded={isExpanded}
      aria-controls="modal-window"
    >
      {text ? text : data.button}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  classType: PropTypes.number,
  text: PropTypes.string,
};

export default Button;
