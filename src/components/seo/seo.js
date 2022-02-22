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
      <link
        as="font"
        href="fonts/Comfortaa-Regular.woff2"
        rel="preload"
        crossorigin="anonymous"
      />
      <link
        as="font"
        href="fonts/Comfortaa-Medium.woff2"
        rel="preload"
        crossorigin="anonymous"
      />
      <link
        as="font"
        href="fonts/Comfortaa-Light.woff2"
        rel="preload"
        crossorigin="anonymous"
      />
      <meta name="description" content={metaDescription} />
      <meta name="title" content={title} />
      <meta name="type" content="website" />
      <meta name="creator" content={site.siteMetadata.author} />
      <meta http-equiv="Content-Type" content="text/html" charset="utf-8" />
      {children}
    </Helmet>
  );
};

export default SEO;
