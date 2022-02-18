import React, { useContext } from 'react';
import * as s from './Results.module.scss';

// Если в нашем компоненте нужно выполнить или нет рендеринг в зависимости от ширины экрана, берём испортируем контекст и формат. А такэе useContext
import { PageFormatContext, format } from 'context/pageFormatContext';
import Section from 'components/common/section/section';
import ResultCard from 'components/main/resultCard/ResultCard';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import 'styles/vendor/_swiperStyles.scss';

// import required modules
import { Navigation, Pagination, Keyboard } from 'swiper';

const Results = () => {
  // забираем значение ширины экрана, которое высчитывается в компоненте Layout и реализуем рендеринг по условию
  const pageFormat = useContext(PageFormatContext);
  const isTablet = pageFormat === format.tablet;
  const isDesktop = pageFormat === format.desktop;

  const isBackground = isTablet || isDesktop;

  return (
    <Section head={'Результаты наших клиентов'} titleLevel="h4">
      {isBackground && <div className={s.background}></div>}
      <Swiper
        // cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Keyboard]}
        className="resultSwiper"
      >
        <SwiperSlide>
          <ResultCard />
        </SwiperSlide>
        <SwiperSlide>
          <ResultCard />
        </SwiperSlide>
        <SwiperSlide>
          <ResultCard />
        </SwiperSlide>
      </Swiper>
    </Section>
  );
};

export default Results;
