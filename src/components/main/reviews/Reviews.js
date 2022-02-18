import React from 'react';
// import * as s from './Reviews.module.scss';

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

const Reviews = () => {
  return (
    <Section head={'Отзывы'} darkBackground={true} titleLevel="h4">
      <Slider isPagination isReviewSlides sliderClass="reviewSwiper">
        <SwiperSlide>
          <ReviewCard
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis varius eros ac rhoncus. Phasellus volutpat sem leo, sed pulvinar lacus gravida."
            foto_1x={reviewsGirl_1_1x}
            foto_2x={reviewsGirl_1_2x}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis
        varius eros ac rhoncus."
            foto_1x={reviewsGirl_2_1x}
            foto_2x={reviewsGirl_2_2x}
            girlName="Анастасия"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewVideoCard />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard
            foto_1x={reviewsGirl_2_1x}
            foto_2x={reviewsGirl_2_2x}
            girlName="Анастасия"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard foto_1x={reviewsGirl_1_1x} foto_2x={reviewsGirl_1_2x} />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard
            foto_1x={reviewsGirl_2_1x}
            foto_2x={reviewsGirl_2_2x}
            girlName="Анастасия"
          />
        </SwiperSlide>
      </Slider>
    </Section>
  );
};

export default Reviews;
