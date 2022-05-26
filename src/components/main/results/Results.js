import React, { useContext } from 'react';
import * as s from './Results.module.scss';
import { useI18next } from 'gatsby-plugin-react-i18next';

import { PageFormatContext, format } from 'context/pageFormatContext';
import Section from 'components/common/section/section';
import Slider from 'components/common/slider/slider';
import ResultCard from 'components/main/resultCard/ResultCard';
import { SwiperSlide } from 'swiper/react';

import { imgUrls } from './resultsImages';

// Import Swiper React components

const Results = ({ id }) => {
  //Текст для секции
  const { t } = useI18next();
  const data = t('results', { returnObjects: true });

  // забираем значение ширины экрана, которое высчитывается в компоненте Layout и реализуем рендеринг по условию
  const pageFormat = useContext(PageFormatContext);
  const isTablet = pageFormat === format.tablet;
  const isDesktop = pageFormat === format.desktop;

  const isBackground = isTablet || isDesktop;

  const cards = data.resultCards.map(card => ({
    ...card,
    images: imgUrls[card.id],
  }));

  return (
    <Section head={data.title} titleLevel="h4" id={id}>
      {isBackground && <div className={s.background}></div>}
      <Slider isNavigation isPagination sliderClass="resultSwiper">
        {cards.map(card => (
          <SwiperSlide key={card.id}>
            <ResultCard textContent={card} />
          </SwiperSlide>
        ))}
      </Slider>
    </Section>
  );
};

export default Results;
