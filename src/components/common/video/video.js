import React, { useState, useEffect, useRef } from 'react';

const Video = ({
  videoSrcURL,
  videoTitle,
  width,
  height,
  style,
  videClassStyles,
  ...props
}) => {
  const [showVideo, setShowVideo] = useState(false);
  const container = useRef();

  const observer = useRef();

  const onVideoIntersection = entries => {
    if (!entries || entries.length <= 0) {
      return;
    }

    if (entries[0].isIntersecting) {
      setShowVideo(true);
      observer.current.disconnect();
    }
  };

  useEffect(() => {
    observer.current = new IntersectionObserver(onVideoIntersection, {
      rootMargin: '100px 0px',
      threshold: 0.25,
    });
  }, []);

  useEffect(() => {
    if (window && 'IntersectionObserver' in window) {
      if (container && container.current) {
        observer.current.observe(container.current);
      }
    } else {
      setShowVideo(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [container]);

  return (
    <div
      ref={container}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        margin: '0 auto',
      }}
    >
      {videoSrcURL && showVideo ? (
        <iframe
          width={width}
          height={height}
          src={videoSrcURL}
          frameBorder="0"
          controls="2"
          title={videoTitle}
          allow="accelerometer; autoplay; encrypted-media; gyroscope"
          allowFullScreen
          referrerPolicy="no-referrer"
          style={style}
          className={videClassStyles}
        />
      ) : undefined}
    </div>
  );
};
export default Video;
