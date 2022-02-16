import React, { useState, useEffect } from 'react';
import Section from 'components/common/section/Section';
import Title from 'components/common/title/title';
import Container from 'components/common/container/container';
import Button from 'components/common/button/button';
import Modal from 'components/common/Modal/Modal';

export const Enroll = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };
  const onOpenModal = () => {
    setShowModal(true);
  };
  const enroll = {
    ru: {
      title: '',
      questions:
        'Цените свое время?Хотите гарантированно получить идеальные формы?Мечтаете закрепить этот результат надолго?Хотите заниматься в удовольствие?',
      enroll: 'Тогда записывайтесь на пробную тренировку уже сейчас:',
      buttonTitle: 'ЗАПИСАТЬСЯ ',
    },
    ukr: {},
  };
  return (
    <>
      <Section>
        <Container>
          <Title head={enroll.ru.title} titleHidden={true} titleLevel="h2" />
          <p>{enroll.ru.questions}</p>
          <p>{enroll.ru.partTwo}</p>
          <Button onClick={onOpenModal} classType={3} type="button" />
        </Container>
      </Section>
      {showModal && <Modal closeModal={toggleModal}></Modal>}
    </>
  );
};
