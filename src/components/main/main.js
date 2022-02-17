import React from 'react';
// import Example from './example/example';
import MyComponent from './myComponent/myComponent';
import Hero from '../hero/hero'

const Main = () => {
  return (
    <main>
      <Hero/>
      {/* <Example /> */}
      <MyComponent />
    </main>
  );
};

export default Main;
