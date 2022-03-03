import React, { useState, useEffect, useRef } from 'react';
import YouTube from 'react-youtube';
import * as s from './videoReview.module.scss';

const VideoReview = ({ videoSrcID, videoTitle }) => {
  const [showVideo, setShowVideo] = useState(false);
  const [isPlaing, setIsPlaing] = useState(false);
  console.log('isPlaing: ', isPlaing);
  const container = useRef();
  const videoPlayer = useRef(null);
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

  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      color: 'white',
      fs: 0,
      //   controls: 0,
      showinfo: 0,
      rel: 0,
    },
  };

  const handleYoutubeReady = e => {
    videoPlayer.current = e.target;
  };

  const handleOnPlay = () => {
    setIsPlaing(true);
  };

  const handleOnPause = () => {
    setIsPlaing(false);
  };

  const handleClick = () => {
    if (isPlaing) {
      videoPlayer.current.pauseVideo();
    } else {
      videoPlayer.current.playVideo();
    }
  };

  return (
    <div
      ref={container}
      className={isPlaing ? s.videoBlockNoBefore : s.videoBlock}
    >
      {videoSrcID && showVideo ? (
        <YouTube
          videoId={videoSrcID}
          className={s.videoContent}
          title={videoTitle}
          opts={opts}
          onReady={handleYoutubeReady}
          onPlay={handleOnPlay}
          onPause={handleOnPause}
        />
      ) : undefined}
      <button
        type="button"
        onClick={handleClick}
        className={isPlaing ? `${s.playBtn} ${s.hidePlayBtn}` : s.playBtn}
      ></button>
    </div>
  );
};
export default VideoReview;
