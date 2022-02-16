import React from 'react';
import PropTypes from 'prop-types';

import { section, title } from './section.module.scss';
import Container from '../container/container';
import Title from '../title/title';

// head - принимает текст заголовка секции
// titleLevel - можно задать тот уровень заголовка, который нужен для секции (h1, h2, h3 и т.д.)
// titleHidden - оставляет заголовок, но делает его невидимым

const Section = ({
  head,
  titleLevel,
  titleHidden = false,
  children,
  pt,
  pb,
}) => {
  return (
    <section
      className={section}
      style={{ paddingTop: `${pt}px`, paddingBottom: `${pb}px` }}
    >
      <Container>
        {head && (
          <Title
            tagName={titleLevel}
            className={`${title} ${titleHidden && 'visually-hidden'}`}
          >
            {head}
          </Title>
        )}
        {children}
      </Container>
    </section>
  );
};

export default Section;

Section.propTypes = {
  head: PropTypes.string,
  children: PropTypes.node,
  titleLevel: PropTypes.string,
  titleHidden: PropTypes.bool,
  pt: PropTypes.number,
  pb: PropTypes.number,
};
