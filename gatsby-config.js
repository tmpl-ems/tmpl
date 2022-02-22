/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const siteUrl = 'https://tmplgitp.gatsbyjs.io/';

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl,
    title: 'TMPL',
    description: `EMS-тренування в Києві`,
    author: `GoWeb`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to
        languages: [`uk`, `ru`],
        defaultLanguage: `uk`,
        // generateDefaultLanguagePage: '/uk',
        // redirect: true,
        siteUrl,

        i18nextOptions: {
          lng: 'uk',
          load: 'currentOnly',
          interpolation: {
            escapeValue: false,
          },
          // keySeparator: false,
          nsSeparator: false,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `TMPL app`,
        short_name: `TMPL`,
        description: `EMS-тренування в Києві`,
        lang: `uk`,
        display: `standalone`,
        icon: `src/images/icon/icon.png`,
        start_url: `/`,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-sitemap',
    //   options: {
    //     query: `
    //       {

    //         allSitePage(filter: {context: {i18n: {routed: {eq: false}}}}) {
    //           edges {
    //             node {
    //               context {
    //                 i18n {
    //                   defaultLanguage
    //                   languages
    //                   originalPath
    //                 }
    //               }
    //               path
    //             }
    //           }
    //         }
    //       }
    //     `,
    //     serialize: ({ allSitePage }) => {
    //       return allSitePage.edges.map(edge => {
    //         const { languages, originalPath, defaultLanguage } =
    //           edge.node.context.i18n;
    //         const url = siteUrl + originalPath;
    //         const links = [
    //           { lang: defaultLanguage, url },
    //           { lang: 'x-default', url },
    //         ];
    //         languages.forEach(lang => {
    //           if (lang === defaultLanguage) return;
    //           links.push({ lang, url: `${siteUrl}/${lang}${originalPath}` });
    //         });
    //         return {
    //           url,
    //           changefreq: 'daily',
    //           priority: originalPath === '/' ? 1.0 : 0.7,
    //           links,
    //         };
    //       });
    //     },
    //   },
    // },
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};
