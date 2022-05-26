import React from 'react';
import * as s from './ReviewCard.module.scss';

import VideoReview from 'components/common/video/videoReview';

const ReviewVideoCard = ({ videoId, title }) => {
  return (
    <div className={`${s.slider} ${s.videoWrapper}`}>
      <VideoReview videoSrcID={videoId} videoTitle={title} />
    </div>
  );
};

export default ReviewVideoCard;
