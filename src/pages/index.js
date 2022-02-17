import React, { useState } from 'react';
import Layout from 'components/common/layout/layout';
import Footer from 'components/footer/footer';
import Header from 'components/header/header';
import Main from 'components/main/main';
import Modal from 'components/common/Modal/Modal';

export default function IndexPage() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };

  return (
    <Layout>
      <Header />
      <Main onModalOpen={toggleModal} />
      <Footer />
      {showModal && (
        <Modal closeModal={toggleModal}>
          <div
            style={{
              width: '200px',
              height: '200px',
              backgroundColor: '#ffffff',
            }}
          >
            Вместо этого Div вы будете добавлять свой компонент, нужна
            реализация
          </div>
        </Modal>
      )}
    </Layout>
  );
}
