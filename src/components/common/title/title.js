import React from 'react';

// tagName - можно задать тот уровень заголовка, который нужен для секции (h1, h2, h3 и т.д.)

const Title = ({ tagName = 'h1', children, ...props }) =>
  React.createElement(tagName, props, children);

export default Title;
