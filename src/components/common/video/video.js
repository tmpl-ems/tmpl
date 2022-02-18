import React from 'react';
const Video = ({
  videoSrcURL,
  videoTitle,
  width,
  height,
  style,
  videClassStyles,
  ...props
}) => {
  if (videoSrcURL) {
    return (
      <iframe
        width={width}
        height={height}
        src={videoSrcURL}
        title={videoTitle}
        allow="accelerometer; autoplay; encrypted-media; gyroscope"
        allowFullScreen
        referrerPolicy="no-referrer"
        style={style}
        className={videClassStyles}
      />
    );
  }
};
export default Video;
