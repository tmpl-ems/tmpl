import React from 'react';
import Example from './example/example';
import Advantages from './advantages/advantages';
// import Example from './example/example';
import MyComponent from './myComponent/myComponent';
import PersonalProgram from 'components/main/PersonalProgram';

const Main = () => {
  return (
    <main>
      <Example />
      <Advantages />
      {/* <Example /> */}
      <MyComponent />
      <PersonalProgram />
    </main>
  );
};

export default Main;
