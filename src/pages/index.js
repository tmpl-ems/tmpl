import React, { useState } from 'react';
import { graphql } from 'gatsby';

///

///

import Layout from 'components/common/layout/layout';
import Footer from 'components/footer/footer';
import Header from 'components/header/header';
import Main from 'components/main/main';
import Modal from 'components/common/Modal/Modal';
import SingUpForm from 'components/common/SingUpForm';
import Map from 'components/footer/footer-components/Map/Map';

export default function IndexPage() {
  const [showSingUpModal, setShowSingUpModal] = useState(false);
  const toggleSingUpModal = () => {
    setShowSingUpModal(showModal => !showModal);
  };

  return (
    <Layout>
      {/* <Header />
      <Main onSingUpModalOpen={toggleSingUpModal} />
      <Footer /> */}
      <Map/>
      {showSingUpModal && (
        <Modal closeModal={toggleSingUpModal}>
          <SingUpForm closeModal={toggleSingUpModal} />
        </Modal>
      )}
    </Layout>
  );
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
