import React, { useState } from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';
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

const dblTouchTapMaxDelay = 300;
let latestTouchTap = {
  time: 0,
  target: null,
};

function isDblTouchTap(event) {
  const touchTap = {
    time: new Date().getTime(),
    target: event.currentTarget,
  };
  const isFastDblTouchTap =
    touchTap.target === latestTouchTap.target &&
    touchTap.time - latestTouchTap.time < dblTouchTapMaxDelay;
  latestTouchTap = touchTap;
  return isFastDblTouchTap;
}

const Reviews = ({ id }) => {
  const { t } = useI18next();
  const [activateVideoClass, setActivateVideoClass] =
    useState('video-container');

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
        <SwiperSlide>
          <div
            className={activateVideoClass}
            onDoubleClick={() => {
              setActivateVideoClass(null);
            }}
            onTouchEnd={e => {
              if (isDblTouchTap(e)) {
                setActivateVideoClass(null);
              }
            }}
            onTouchMove={() => {
              setActivateVideoClass('video-container');
            }}
          >
            <ReviewVideoCard />
          </div>
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

//.iframe-container-div::after { content: ""; background: transparent; width: 100%; height: 100%; min-height: 1px; position: absolute; top: 0; }
