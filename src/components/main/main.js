import React from 'react';
import Example from './example/example';
import { Enroll } from './EnrollSection/Enroll';
// import Example from './example/example';
import MyComponent from './myComponent/myComponent';

const Main = () => {
  return (
    <main>
      <Example />
      <Enroll />
      {/* <Example /> */}
      <MyComponent />
    </main>
  );
};

export default Main;
