import React from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';

import Section from 'components/common/section/section';
import Slider from 'components/common/slider/slider';
import ReviewCard from '../reviewCard/ReviewCard';

// import Swiper React components
import { SwiperSlide } from 'swiper/react';

// girls foto
import reviewsGirl_1_1x from 'images/reviews/reviews-girl1.png';
import reviewsGirl_1_2x from 'images/reviews/reviews-girl1-x2.png';

import reviewsGirl_2_1x from 'images/reviews/reviews-girl2.png';
import reviewsGirl_2_2x from 'images/reviews/reviews-girl2-x2.png';
import ReviewVideoCard from '../reviewCard/ReviewVideoCard';

const Reviews = ({ id }) => {
  const { t } = useI18next();
  const data = t('reviews', { returnObjects: true });

  return (
    <Section head={data.head} darkBackground={true} titleLevel="h4" id={id}>
      <Slider isPagination isReviewSlides sliderClass="reviewSwiper">
        <SwiperSlide>
          <ReviewCard
            girlName={data.ReviewCard1.name}
            text={data.ReviewCard1.feedback}
            foto_1x={reviewsGirl_1_1x}
            foto_2x={reviewsGirl_1_2x}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard
            girlName={data.ReviewCard2.name}
            text={data.ReviewCard2.feedback}
            foto_1x={reviewsGirl_2_1x}
            foto_2x={reviewsGirl_2_2x}
          />
        </SwiperSlide>

        {/* video review */}
        <SwiperSlide>
          <ReviewVideoCard />
        </SwiperSlide>

        <SwiperSlide>
          <ReviewCard
            foto_1x={reviewsGirl_2_1x}
            foto_2x={reviewsGirl_2_2x}
            girlName={data.ReviewCard3.name}
            text={data.ReviewCard3.feedback}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard foto_1x={reviewsGirl_1_1x} foto_2x={reviewsGirl_1_2x} />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard
            foto_1x={reviewsGirl_2_1x}
            foto_2x={reviewsGirl_2_2x}
            girlName={data.ReviewCard4.name}
            text={data.ReviewCard4.feedback}
          />
        </SwiperSlide>
      </Slider>
    </Section>
  );
};

export default Reviews;
