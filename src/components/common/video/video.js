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
  return (
    <>
      {videoSrcURL && (
        <iframe
          width={width}
          height={height}
          src={videoSrcURL}
          frameBorder="0"
          title={videoTitle}
          allow="accelerometer; autoplay; encrypted-media; gyroscope"
          allowFullScreen
          referrerPolicy="no-referrer"
          style={style}
          className={videClassStyles}
        />
      )}
    </>
  );
};
export default Video;
