import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useI18next } from 'gatsby-plugin-react-i18next';
import * as s from './button.module.scss';

const Button = ({
  type = 'button',
  classType = 1,
  text,
  addClass,
  onBtnClick,
  ...props
}) => {
  const [nameOfClass, setNameOfClass] = useState(s.btn1);

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

  return (
    <button
      type={type}
      className={`${nameOfClass} ${addClass}`}
      onClick={onBtnClick}
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
