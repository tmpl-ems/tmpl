import React from 'react';
import Layout from 'components/common/layout/layout';
import Footer from 'components/footer/footer';
import Header from 'components/header/header';
import Main from 'components/main/main';

export default function indexPage() {
  return (
    <Layout>
      <Header />
      <Main />
      <Footer />
    </Layout>
  );
}
