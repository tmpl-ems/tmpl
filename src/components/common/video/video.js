import React from 'react';
const Video = ({ videoSrcURL, videoTitle, width, height, style, ...props }) => {
  if (videoSrcURL) {
    return (
      <iframe
        width={width}
        height={height}
        src={videoSrcURL}
        title={videoTitle}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        referrerPolicy="no-referrer"
        style={style}
      />
    );
  }
};
export default Video;
