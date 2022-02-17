import Results from 'components/results/Results';
import Reviews from 'components/reviews/Reviews';
import React from 'react';
// import Example from './example/example';
import { Enroll } from './EnrollSection/Enroll';
import Advantages from './advantages/advantages';
// import MyComponent from './myComponent/myComponent';
import PersonalProgram from 'components/main/PersonalProgram';
import Goals from './goals/goals';
import MyComponent from './myComponent/myComponent';
import Hero from '../hero/hero';

const Main = ({ onModalOpen }) => {
  return (
    <main>
      <Goals onModalOpen={onModalOpen} />
      <Advantages />
      <Results />
      <Reviews />
      {/* <MyComponent /> */}
      <PersonalProgram />
      <Enroll onModalOpen={onModalOpen} />
      <Hero />
      {/* <Example /> */}
      <MyComponent />
    </main>
  );
};

export default Main;
