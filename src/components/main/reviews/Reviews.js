import React from 'react';
// import * as s from './Reviews.module.scss';

import Section from 'components/common/section/section';
import ReviewCard from '../reviewCard/ReviewCard';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/pagination';

import 'styles/vendor/_swiperStyles.scss';

// import required modules
import { Pagination, Keyboard } from 'swiper';

//girls foto
import reviewsGirl_1_1x from 'images/reviews/reviews-girl1.png';
import reviewsGirl_1_2x from 'images/reviews/reviews-girl1-x2.png';

import reviewsGirl_2_1x from 'images/reviews/reviews-girl2.png';
import reviewsGirl_2_2x from 'images/reviews/reviews-girl2-x2.png';

const Reviews = () => {
  return (
    <Section head={'Отзывы'} darkBackground={true} titleLevel="h4">
      <Swiper
        slidesPerView={1}
        spaceBetween={32}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        pagination={true}
        keyboard={true}
        modules={[Pagination, Keyboard]}
        className="reviewSwiper"
      >
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
          <ReviewCard
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis
        varius eros ac rhoncus. Phasellus volutpat sem leo, sed pulvinar lacus
        gravida at. Proin mollis varius eros ac rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis
        varius eros ac rhoncus. Phasellus volutpat sem leo, sed pulvinar lacus
        gravida at. Proin mollis varius eros ac rhoncus."
            foto_1x={reviewsGirl_1_1x}
            foto_2x={reviewsGirl_1_2x}
          />
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
      </Swiper>
    </Section>
  );
};

export default Reviews;
