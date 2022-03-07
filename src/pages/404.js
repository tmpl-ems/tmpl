import React, { useState, useEffect } from 'react';
import { graphql, navigate } from 'gatsby';

import RedirectTimer from 'components/common/redirectTimer/RedirectTimer';
import Section from 'components/common/section/section';
import Button from 'components/common/button/button';
import { notFound } from 'components/common/button/button.module.scss';
import { useI18next } from 'gatsby-plugin-react-i18next';

const NotFoundPage = () => {
  const [timeToRedirect, setTimeToRedirect] = useState(false);
  const { language, t } = useI18next();

  const handleClick = () => {
    navigate(`/${language}/`, { replace: true });
  };

  useEffect(() => {
    if (!timeToRedirect) return;
    navigate(`/${language}/`, { replace: true });
  }, [language, timeToRedirect]);

  const data = t('notFoundPage', { returnObjects: true });

  return (
    <Section head={data.title} titleLevel="h2">
      <Button
        text={data.button}
        onBtnClick={handleClick}
        addClass={notFound}
        classType={3}
      />
      <p className="defaultParagraph">{data.par}</p>
      <RedirectTimer getRedirect={setTimeToRedirect} />
    </Section>
  );
};

export default NotFoundPage;

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
