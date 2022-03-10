import React from 'react';
import * as s from './ReviewCard.module.scss';
import { useI18next } from 'gatsby-plugin-react-i18next';

import VideoReview from 'components/common/video/videoReview';

const ReviewVideoCard = () => {
  const videoId = '8YljtNci1Io';

  const { t } = useI18next();
  const data = t('videos', { returnObjects: true });

  return (
    <div className={`${s.slider} ${s.videoWrapper}`}>
      <VideoReview videoSrcID={videoId} videoTitle={data.title1} />
    </div>
  );
};

export default ReviewVideoCard;
