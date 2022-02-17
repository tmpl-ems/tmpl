import React from 'react';

import How from './how/how';
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
      <How />
      {/* <Example /> */}
      <MyComponent />
      <PersonalProgram />
    </main>
  );
};

export default Main;
