import Results from 'components/main/results/Results';
import Reviews from 'components/main/reviews/Reviews';
import React from 'react';

import How from './how/how';

import { Enroll } from './EnrollSection/Enroll';
import Advantages from './advantages/advantages';
import PersonalProgram from 'components/main/PersonalProgram';
import Goals from './goals/goals';
import Hero from '../hero/hero';
import AboutUsSection from './about/AboutUsSection';

const Main = ({ onSingUpModalOpen }) => {
  return (
    <main>
      <Hero onSingUpModalOpen={onSingUpModalOpen} />
      <AboutUsSection id={'about-us'} />
      <Goals onSingUpModalOpen={onSingUpModalOpen} id={'goals'} />
      <Advantages />
      <How />

      <Results id={'clients-result'} />

      <Reviews id={'feedbacks'} />

      <PersonalProgram onSingUpModalOpen={onSingUpModalOpen} id={'programs'} />

      <Enroll onSingUpModalOpen={onSingUpModalOpen} />
    </main>
  );
};

export default Main;
