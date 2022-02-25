import React from 'react';
import PropTypes from 'prop-types';

// Import Swiper React components
import { Swiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import 'styles/vendor/_swiperStyles.scss';

// import required modules
import { Navigation, Pagination } from 'swiper';

const Slider = ({
  children,
  isNavigation = false,
  isPagination = false,
  isReviewSlides = false,
  sliderClass,
}) => {
  const modulesArray = () => {
    let result = [];
    if (isNavigation) {
      result.push(Navigation);
    }
    if (isPagination) {
      result.push(Pagination);
    }
    return result;
  };

  return (
    <>
      {isReviewSlides ? (
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
          navigation={isNavigation}
          pagination={isPagination ? {
            clickable: true
          }:false}
          modules={modulesArray()}
          className={sliderClass}
        >
          {children}
        </Swiper>
      ) : (
        <Swiper
          navigation={isNavigation}
          pagination={isPagination}
          modules={modulesArray()}
          className={sliderClass}
        >
          {children}
        </Swiper>
      )}
    </>
  );
};

Slider.propTypes = {
  children: PropTypes.node,
  isNavigation: PropTypes.bool,
  isPagination: PropTypes.bool,
  isReviewSlides: PropTypes.bool,
  sliderClass: PropTypes.string,
};

export default Slider;
