import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';
///

import Layout from 'components/common/layout/layout';
import Footer from 'components/footer/footer';
import Header from 'components/header/header';
import Main from 'components/main/main';
import Modal from 'components/common/Modal/Modal';
import SingUpForm from 'components/common/SingUpForm';
import Notification from 'components/common/notification/Notification';

///

export default function IndexPage() {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [showSingUpModal, setShowSingUpModal] = useState(false);
  const [tgBotNotification, setTgBotNotification] = useState(false);

  const notification = () => {
    setTgBotNotification(true);
    setTimeout(() => {
      setTgBotNotification(false);
    }, 5000);
  };

  const toggleSingUpModal = () => {
    setShowSingUpModal(showModal => !showModal);
  };

  const { changeLanguage, language, path, defaultLanguage } = useI18next();
  const [elToScroll, setElToScroll] = useState(null);

  useEffect(() => {
    const lsLang = window.localStorage.getItem('gatsby-i18next-language');

    if (!lsLang) {
      changeLanguage(defaultLanguage);
      return;
    }

    if (!path.includes(language)) {
      changeLanguage(lsLang);
      return;
    }
  }, [changeLanguage, defaultLanguage, language, path]);

  // const getElToScroll = ref => {
  //   setElToScroll(ref);
  // };

  return (
    <Layout>
      <Header getElToScroll={setElToScroll} />
      <Main
        onSingUpModalOpen={toggleSingUpModal}
        setSelectedProgram={setSelectedProgram}
        selectedProgram={selectedProgram}
      />
      <Footer elToScroll={elToScroll} />

      {showSingUpModal && (
        <Modal closeModal={toggleSingUpModal}>
          <SingUpForm
            closeModal={toggleSingUpModal}
            setSelectedProgram={setSelectedProgram}
            selectedProgram={selectedProgram}
            notification={notification}
          />
        </Modal>
      )}

      {tgBotNotification && (
        <Modal closeModal={() => setTgBotNotification(false)}>
          <Notification />
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
