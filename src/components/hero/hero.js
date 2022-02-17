import React from 'react';
import * as s from './hero.module.scss';

import Container from 'components/common/container/container';
import Content from './content/content';

const Hero = () => {
  return (
    <section className={s.section}>
      <Container>
        <Content />
      </Container>
    </section>
  );
};

export default Hero;
