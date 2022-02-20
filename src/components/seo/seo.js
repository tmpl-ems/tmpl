import React from 'react';
import { Helmet } from 'react-helmet';

import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ description, title, children, lang }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      title={title}
      // titleTemplate={`%s | ${site.siteMetadata.title}`}
      titleTemplate={`${site.siteMetadata.title}`}
      htmlAttributes={{
        lang,
      }}
    >
      <meta name="description" content={metaDescription} />
      <meta name="title" content={title} />
      <meta name="type" content="website" />
      <meta name="creator" content={site.siteMetadata.author} />
      <link
        rel="preload"
        href="fonts/Comfortaa-Light.woff2"
        as="font"
        type="font/woff2"
      />
      <link
        rel="preload"
        href="fonts/Comfortaa-Regular.woff2"
        as="font"
        type="font/woff2"
      />
      <link
        rel="preload"
        href="fonts/Comfortaa-Medium.woff2"
        as="font"
        type="font/woff2"
      />
      {children}
    </Helmet>
  );
};

export default SEO;
