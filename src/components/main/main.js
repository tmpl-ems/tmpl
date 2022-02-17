import Results from 'components/results/Results';
import React from 'react';
import Example from './example/example';
import { Enroll } from './EnrollSection/Enroll';
import Advantages from './advantages/advantages';
// import Example from './example/example';
import MyComponent from './myComponent/myComponent';
import PersonalProgram from 'components/main/PersonalProgram';

const Main = ({ onModalOpen }) => {
  return (
    <main>
      <Results />
      <Example />
      <Enroll onModalOpen={onModalOpen} />
      <Advantages />
      <MyComponent />
      <PersonalProgram />
    </main>
  );
};

export default Main;
