import React from 'react';
import PropTypes from 'prop-types';

import { section, title } from './section.module.scss';
import Container from '../container/container';

const Section = ({ head, children, titleLevel, isHidden = false }) => {
  return (
    <section className={section}>
      <Container>
        {head && (
          <h2 className={`${title} ${isHidden && 'visually-hidden'}`}>
            {head}
          </h2>
        )}
        {children}
      </Container>
    </section>
  );
};

export default Section;

Section.propTypes = {
  head: PropTypes.string.isRequired,
  children: PropTypes.node,
  titleLevel: PropTypes.string,
  isHidden: PropTypes.bool,
};
