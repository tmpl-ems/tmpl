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
        href="/static/Comfortaa-Medium-1f961fbe31333ef7dbde4c8cc4479da8.woff2"
        rel="preload"
        crossorigin="anonymous"
      />
      <link
        as="font"
        href="/static/Comfortaa-Regular-c3e336750e5922b4ee8b94c1544ab762.woff2"
        rel="preload"
        crossorigin="anonymous"
      />
      <link
        as="font"
        href="/static/Comfortaa-Light-881f76691f2eaa63205dd9a1d77b334a.woff2"
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
