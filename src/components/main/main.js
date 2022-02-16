import React from 'react';
import Example from './example/example';
import { Enroll } from './EnrollSection/Enroll';
import { Modal } from 'components/common/Modal/Modal';

const Main = () => {
  return (
    <main>
      <Example />
      <Enroll />
    </main>
  );
};

export default Main;
