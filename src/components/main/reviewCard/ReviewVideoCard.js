import React from 'react';
import * as s from './ReviewCard.module.scss';

import Video from 'components/common/video/video';

const ReviewVideoCard = () => {
  const videoUrl = `https://www.youtube.com/embed/8YljtNci1Io?fs=0&modestbranding=1&color=white&showinfo=0&rel=0`;

  return (
    <div className={`${s.slider} ${s.videoWrapper}`}>
      <div className={s.videoBlock}>
        <Video videoSrcURL={videoUrl} videClassStyles={s.videoContent} />
      </div>
    </div>
  );
};

export default ReviewVideoCard;
