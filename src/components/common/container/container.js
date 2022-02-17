import React from 'react';
import { container } from './container.module.scss';
import PropTypes from 'prop-types';

const Container = ({ children, addClass }) => {
  return <div className={`${container} ${addClass}`}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node,
  addClass: PropTypes.string,
};

export default Container;
