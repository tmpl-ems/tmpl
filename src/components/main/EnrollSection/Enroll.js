import React, { useState, useEffect } from 'react';
import Section from 'components/common/section/Section';
import Title from 'components/common/title/title';
import Container from 'components/common/container/container';
import Button from 'components/common/button/button';
import Modal from 'components/common/Modal/Modal';
import * as s from './_enroll.scss';

export const Enroll = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };

  const enroll = {
    ru: {
      title: '',
      question1: 'Цените свое время?',
      question2: 'Хотите гарантированно получить идеальные формы?',
      question3: 'Мечтаете закрепить этот результат надолго?',
      question4: 'Хотите заниматься в удовольствие?',
      enroll: 'Тогда записывайтесь на пробную тренировку уже сейчас:',
      buttonTitle: 'ЗАПИСАТЬСЯ ',
    },
    ukr: {},
  };
  return (
    <>
      <Section className={s.enroll}>
        <Container>
          <Title head={enroll.ru.title} titleHidden={true} titleLevel="h2" />
          <p>{enroll.ru.question1}</p>
          <p>{enroll.ru.question2}</p>
          <p>{enroll.ru.question3}</p>
          <p>{enroll.ru.question4}</p>
          <p>{enroll.ru.enroll}</p>
          <Button onClick={toggleModal} classType={2} type="button" />
        </Container>
      </Section>
      {showModal && <Modal closeModal={toggleModal}></Modal>}
    </>
  );
};
