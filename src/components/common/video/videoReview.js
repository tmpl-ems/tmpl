import React, { useState, useEffect, useRef } from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';
import YouTube from 'react-youtube';
import * as s from './videoReview.module.scss';

const VideoReview = ({ videoSrcID, videoTitle }) => {
  const [showVideo, setShowVideo] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const container = useRef();
  const videoPlayer = useRef(null);
  const observer = useRef();
  const { t } = useI18next();

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
    setIsPlaying(true);
  };

  const handleOnPause = () => {
    setIsPlaying(false);
  };

  const handleClick = () => {
    if (isPlaying) {
      videoPlayer.current.pauseVideo();
    } else {
      videoPlayer.current.playVideo();
    }
  };

  const data = t('aria', { returnObjects: true });

  return (
    <div
      ref={container}
      className={isPlaying ? s.videoBlockNoBefore : s.videoBlock}
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
        className={isPlaying ? `${s.playBtn} ${s.hidePlayBtn}` : s.playBtn}
        aria-label={data.playBtn}
      ></button>
    </div>
  );
};
export default VideoReview;
