import React from 'react';
import Container from 'components/common/container/container';
import Content from './content/content';
import * as s from './hero.module.scss';

const Hero = ({ onSingUpModalOpen }) => {
  return (
    <section className={s.section}>
      <div className={s.contentBgImg}>
        <Container>
          <Content onSingUpModalOpen={onSingUpModalOpen} />
        </Container>
      </div>
    </section>
  );
};

export default Hero;
