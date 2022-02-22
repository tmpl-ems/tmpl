import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'gatsby-plugin-react-i18next';
import { useStaticQuery, graphql } from 'gatsby';
import image from 'images/etc/header-img.png';
import lightFont from 'fonts/Comfortaa-Light.woff2';
import mediumFont from 'fonts/Comfortaa-Medium.woff2';
import regularFont from 'fonts/Comfortaa-Regular.woff2';

function SEO({ description, meta, title }) {
  console.log('image', regularFont);
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
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
      titleTemplate={`${site.siteMetadata.title}`}
      // titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: image,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <link as="font" href={lightFont} rel="preload" crossorigin="anonymous" />
      <link as="font" href={mediumFont} rel="preload" crossorigin="anonymous" />
      <link
        as="font"
        href={regularFont}
        rel="preload"
        crossorigin="anonymous"
      />
    </Helmet>
  );
}

SEO.defaultProps = {
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
