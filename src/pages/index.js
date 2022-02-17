import React, { useState } from 'react';
import Layout from 'components/common/layout/layout';
import Footer from 'components/footer/footer';
import Header from 'components/header/header';
import Main from 'components/main/main';
import Modal from 'components/common/Modal/Modal';
import SingUpForm from 'components/common/SingUpForm';

export default function IndexPage() {
  const [showSingUpModal, setShowSingUpModal] = useState(false);
  const toggleSingUpModal = () => {
    setShowSingUpModal(showModal => !showModal);
  };

  return (
    <Layout>
      <Header />
      <Main onSingUpModalOpen={toggleSingUpModal} />
      <Footer />
      {showSingUpModal && (
        <Modal closeModal={toggleSingUpModal}>
          <SingUpForm closeModal={toggleSingUpModal} />
        </Modal>
      )}
    </Layout>
  );
}
