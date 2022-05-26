import React from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';

import Section from 'components/common/section/section';
import Slider from 'components/common/slider/slider';
import ReviewCard from '../reviewCard/ReviewCard';

import { SwiperSlide } from 'swiper/react';
import { imgUrls } from './reviesImages';

import ReviewVideoCard from '../reviewCard/ReviewVideoCard';

const videoIds = {
  1: 'RWxOUtod-Tk',
  2: 'avxBsrgQciw',
  3: 'AEFJd6Xu5qI',
};

const Reviews = ({ id }) => {
  const { t } = useI18next();
  const data = t('reviews', {
    returnObjects: true,
    interpolation: { escapeValue: false },
  });
  const videos = t('videos', { returnObjects: true });

  return (
    <Section head={data.head} darkBackground={true} titleLevel="h4" id={id}>
      <Slider isPagination isReviewSlides sliderClass="reviewSwiper">
        <SwiperSlide>
          <ReviewCard
            girlName={data.ReviewCard1.name}
            text={data.ReviewCard1.feedback}
            foto_1x={imgUrls[1].label_1x}
            foto_2x={imgUrls[1].label_2x}
            date={data.ReviewCard1.date}
          />
        </SwiperSlide>

        <SwiperSlide>
          <ReviewVideoCard videoId={videoIds[3]} title={videos.title3} />
        </SwiperSlide>

        <SwiperSlide>
          <ReviewCard
            girlName={data.ReviewCard2.name}
            text={data.ReviewCard2.feedback}
            foto_1x={imgUrls[2].label_1x}
            foto_2x={imgUrls[2].label_2x}
            date={data.ReviewCard2.date}
          />
        </SwiperSlide>

        <SwiperSlide>
          <ReviewVideoCard videoId={videoIds[1]} title={videos.title1} />
        </SwiperSlide>

        <SwiperSlide>
          <ReviewCard
            foto_1x={imgUrls[3].label_1x}
            foto_2x={imgUrls[3].label_2x}
            girlName={data.ReviewCard3.name}
            text={data.ReviewCard3.feedback}
            date={data.ReviewCard3.date}
          />
        </SwiperSlide>

        <SwiperSlide>
          <ReviewVideoCard videoId={videoIds[2]} title={videos.title2} />
        </SwiperSlide>
      </Slider>
    </Section>
  );
};

export default Reviews;
