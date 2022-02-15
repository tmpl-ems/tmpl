import React, { useContext } from 'react';
import * as s from './Results.module.scss';

// Если в нашем компоненте нужно выполнить или нет рендеринг в зависимости от ширины экрана, берём испортируем контекст и формат. А такэе useContext
import { PageFormatContext, format } from 'context/pageFormatContext';
import Section from 'components/common/section/Section';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../../styles/vendor/_swiperStyles.scss';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
import ResultCard from 'components/resultCard/ResultCard';

const Results = () => {
  // забираем значение ширины экрана, которое высчитывается в компоненте Layout и реализуем рендеринг по условию
  const pageFormat = useContext(PageFormatContext);
  const isTablet = pageFormat === format.tablet;

  return (
    <Section
      head={'Результаты наших клиентов'}
      titleHidden={false}
      titleLevel="h4"
    >
      <div className={isTablet && s.background}> </div>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
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
