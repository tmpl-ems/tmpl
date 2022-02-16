import Results from 'components/results/Results';
import React from 'react';
import Example from './example/example';
import Advantages from './advantages/advantages';
// import Example from './example/example';
import MyComponent from './myComponent/myComponent';
import PersonalProgram from 'components/main/PersonalProgram';

const Main = () => {
  return (
    <main>
      <Results />
      <Example />
      <Advantages />
      <MyComponent />
      <PersonalProgram />
    </main>
  );
};

export default Main;
