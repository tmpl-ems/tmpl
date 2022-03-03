import React from 'react';
import * as s from './ReviewCard.module.scss';

import VideoReview from 'components/common/video/videoReview';

const ReviewVideoCard = () => {
  const videoId = '8YljtNci1Io';

  return (
    <div className={`${s.slider} ${s.videoWrapper}`}>
      <VideoReview videoSrcID={videoId} videoTitle="Traine Review" />
    </div>
  );
};

export default ReviewVideoCard;
