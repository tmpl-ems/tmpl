import React from 'react';
import Section from 'components/common/section/section';
import { useI18next } from 'gatsby-plugin-react-i18next';
import * as s from './how.module.scss';
import VideoReview from 'components/common/video/videoReview';

const How = ({ id }) => {
  // const videoUrl = 'https://www.youtube.com/embed/HUZLr7XmdmU';
  const videoId = 'HUZLr7XmdmU';

  const { t } = useI18next();
  const data = t('how', { returnObjects: true });

  return (
    <div className={s.howBackgroundContainer}>
      <Section
        head={data.title}
        titleHidden={true}
        titleLevel={'h3'}
        darkBackground={true}
        id={id}
      >
        <p className={s.howTitle}>{data.suptitle}</p>
        <div className={s.howTabletFlexContainer}>
          <div className={s.videoWpapper}>
            <VideoReview videoSrcID={videoId} videoTitle={data.videoTitle} />
          </div>

          <div className={s.howTextContentContainer}>
            <ul className={s.howList}>
              {data.content.textContent.map((el, index) => {
                return (
                  <li
                    key={index}
                    className={`${s['howItem' + index]}  ${s.howItem}`}
                  >
                    <div
                      className={`${s['howTextBox' + index]}  ${s.howTextBox}`}
                    >
                      <p
                        className={`${s.howNumber}  ${s['howNumber' + index]}`}
                      >
                        {el.number}
                      </p>
                      <p
                        className={`${s['howCommonText' + index]} ${
                          s.howCommonText
                        }`}
                      >
                        {el.text}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Section>{' '}
    </div>
  );
};

export default How;
