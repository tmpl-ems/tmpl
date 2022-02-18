import Results from 'components/results/Results';
import Reviews from 'components/reviews/Reviews';
import React from 'react';
import { Element } from 'react-scroll';

import How from './how/how';

import { Enroll } from './EnrollSection/Enroll';
import Advantages from './advantages/advantages';
import PersonalProgram from 'components/main/PersonalProgram';
import Goals from './goals/goals';
import MyComponent from './myComponent/myComponent';
import Hero from '../hero/hero';
import AboutUsSection from './about/AboutUsSection';

const Main = ({ onSingUpModalOpen }) => {
  return (
    <main>
      <Hero />
      <AboutUsSection />
      <Advantages />
      <Element name={'goals'}>
        <Goals onSingUpModalOpen={onSingUpModalOpen} />
      </Element>
      <Element name={'about-us'}>
        <How />
      </Element>
      <Element name={'clients-result'}>
        <Results />
      </Element>
      <Element name={'feedbacks'}>
        <Reviews />
      </Element>
      <Element name={'programs'}>
        <PersonalProgram onSingUpModalOpen={onSingUpModalOpen} />
      </Element>

      <Enroll onSingUpModalOpen={onSingUpModalOpen} />
      <PersonalProgram />
      <MyComponent />
    </main>
  );
};

export default Main;
