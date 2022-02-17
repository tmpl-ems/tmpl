import Results from 'components/results/Results';
import Reviews from 'components/reviews/Reviews';
import React from 'react';

import How from './how/how';

import { Enroll } from './EnrollSection/Enroll';
import Advantages from './advantages/advantages';
import PersonalProgram from 'components/main/PersonalProgram';
import Goals from './goals/goals';
import MyComponent from './myComponent/myComponent';
import Hero from '../hero/hero';

const Main = ({ onSingUpModalOpen }) => {
  return (
    <main>
      <Hero />
      <Advantages />
      <Goals onSingUpModalOpen={onSingUpModalOpen} />
      <How />
      <Results />
      <Reviews />
      <PersonalProgram onSingUpModalOpen={onSingUpModalOpen} />
      <Enroll onSingUpModalOpen={onSingUpModalOpen} />
      <PersonalProgram />
      <MyComponent />
    </main>
  );
};

export default Main;
