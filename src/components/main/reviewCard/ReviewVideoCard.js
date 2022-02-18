import React from 'react';
import * as s from './ReviewCard.module.scss';

import Video from 'components/common/video/video';

const ReviewVideoCard = () => {
  const videoUrl = `https://www.youtube.com/embed/Ihvs5qt1Ut0?fs=0&modestbranding=1&color=white&showinfo=0&rel=0`;
  const videoTitle = 'YouTube video player';

  return (
    <div className={`${s.slider} ${s.videoWrapper}`}>
      <div className={s.videoBlock}>
        <Video
          videoSrcURL={videoUrl}
          videoTitle={videoTitle}
          // width={'100%'}
          // height={'100%'}
          videClassStyles={s.videoContent}
        />
      </div>
    </div>
  );
};

export default ReviewVideoCard;
