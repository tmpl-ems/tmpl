import React from 'react';
import AboutUsSection from './about/AboutUsSection';
import Example from './example/example';
import Advantages from './advantages/advantages';
import MyComponent from './myComponent/myComponent';
import PersonalProgram from 'components/main/PersonalProgram';

const Main = () => {
  return (
    <main>
      <AboutUsSection/>
      <Example />
      <Advantages />
      <MyComponent />
      <PersonalProgram />
    </main>
  );
};

export default Main;
