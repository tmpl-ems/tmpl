import Results from 'components/results/Results';
import React from 'react';
// import Example from './example/example';
import { Enroll } from './EnrollSection/Enroll';
import Advantages from './advantages/advantages';
// import MyComponent from './myComponent/myComponent';
import PersonalProgram from 'components/main/PersonalProgram';
import Goals from './goals/goals';

const Main = ({ onModalOpen }) => {
  return (
    <main>
      <Goals onModalOpen={onModalOpen} />
      <Advantages />
      <Results />
      <PersonalProgram />
      <Enroll onModalOpen={onModalOpen} />
    </main>
  );
};

export default Main;
