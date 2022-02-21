import React, { useContext } from 'react';
import * as s from './Results.module.scss';
import { useI18next } from 'gatsby-plugin-react-i18next';

// Если в нашем компоненте нужно выполнить или нет рендеринг в зависимости от ширины экрана, берём испортируем контекст и формат. А такэе useContext
import { PageFormatContext, format } from 'context/pageFormatContext';
import Section from 'components/common/section/section';
import Slider from 'components/common/slider/slider';
import ResultCard from 'components/main/resultCard/ResultCard';

// Import Swiper React components
import { SwiperSlide } from 'swiper/react';

const Results = ({ id }) => {
  //Текст для секции
  const { t } = useI18next();
  const data = t('results', { returnObjects: true });

  // забираем значение ширины экрана, которое высчитывается в компоненте Layout и реализуем рендеринг по условию
  const pageFormat = useContext(PageFormatContext);
  const isTablet = pageFormat === format.tablet;
  const isDesktop = pageFormat === format.desktop;

  const isBackground = isTablet || isDesktop;

  return (
    <Section head={data.title} titleLevel="h4" id={id}>
      {isBackground && <div className={s.background}></div>}
      <Slider isNavigation isPagination sliderClass="resultSwiper">
        {data.resultCards.map(card => (
          <SwiperSlide key={card.id}>
            <ResultCard textContent={card} />
          </SwiperSlide>
        ))}
      </Slider>
    </Section>
  );
};

export default Results;
