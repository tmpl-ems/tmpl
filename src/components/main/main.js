import Results from 'components/results/Results';
import Reviews from 'components/reviews/Reviews';
import React from 'react';
// import Example from './example/example';
import { Enroll } from './EnrollSection/Enroll';
import Advantages from './advantages/advantages';
// import MyComponent from './myComponent/myComponent';
import PersonalProgram from 'components/main/PersonalProgram';

const Main = ({ onModalOpen }) => {
  return (
    <main>
      {/* <Example /> */}
      <Advantages />
      <Results />
      <Reviews />
      {/* <MyComponent /> */}
      <PersonalProgram />
      <Enroll onModalOpen={onModalOpen} />
    </main>
  );
};

export default Main;
