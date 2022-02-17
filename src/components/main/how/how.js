import React, { useContext, useEffect, useState } from 'react';
import Section from 'components/common/section/section';
import Video from 'components/common/video/video';
import { PageFormatContext, format } from 'context/pageFormatContext';
import { usePaddingsValues } from 'hooks/usePaddingsValues';

import arrow from '../../../../src/images/how/dashed-angle-arrow.png';
import secondaryArrow from '../../../../src/images/how/dashed-straight-arrow.png';
import * as s from './how.module.scss';

const data = {
  ru: {
    title: 'Как проходит 30-минутная тренировка индивидуально с тренером:',
    content: {
      textContent: [
        {
          number: 10,
          text: 'минут — легкий кардио-тренинг',
        },
        {
          number: 10,
          text: 'минут — силовой тренинг с небольшими весами',
        },
        {
          number: 5,
          text: 'минут  — массаж лимфодренажный',
        },
        {
          number: 5,
          text: 'минут  — дополнительная проработка “проблемной” зоны',
        },
      ],
    },
  },
  // just an example of Ukrainian version of  the section. WARNING THIS DATA`S TRANSLATION SHOULD BE CHECKED
  ukr: {
    title: 'Як проходить 30-хвилинне тренування індивідуально з тренером',
    content: {
      styledNumbers: [10, 10, 5, 5],
      textContent: [
        'хвилин — легкий кардіо тренінг',
        'хвилин — силовий тренінг з невеликими навантаженнями',
        'хвилин  — масаж лімфодренажний',
        'хвилин  — додаткове відпрацювання “проблемних” зон',
      ],
    },
  },
};

const styles = {
  response: { pt: 28, pb: 40 },
  mobile: { pt: 28, pb: 40 },
  tablet: { pt: 60, pb: 60 },
  desktop: { pt: 60, pb: 53 },
};

const videoStyles = {
  common: {
    border: 'double 2px transparent',
    borderRadius: '16px',
    backgroundImage: ' linear-gradient(180deg, #20c5a0 0%, #0a866a 100%)',
    backgroundOrigin: 'border-box',
    backgroundClip: 'content-box border-box',
  },
  mobile: { display: 'block', marginLeft: 'auto', marginRight: 'auto' },
  tablet: { display: 'block' },
};

const How = () => {
  const videoUrl = 'https://www.youtube.com/embed/Ihvs5qt1Ut0';
  const videoTitle = 'YouTube video player';

  const pageFormat = useContext(PageFormatContext);
  const [videoSizes, setVideoSizes] = useState({});
  const [videoStyle, setVideoStyle] = useState({});
  const isTablet = pageFormat === format.tablet;
  const isDesktop = pageFormat === format.desktop;
  const isResponse = pageFormat === format.response;

  useEffect(() => {
    if (pageFormat === format.tablet) {
      setVideoSizes({ width: 340, height: 266 });
      setVideoStyle({ ...videoStyles.common, ...videoStyles.tablet });
    }
    if (pageFormat === format.desktop) {
      setVideoSizes({ width: 608, height: 454 });
    }
    if (pageFormat === format.mobile) {
      setVideoSizes({ width: 280, height: 266 });
      setVideoStyle({ ...videoStyles.common, ...videoStyles.mobile });
    }
  }, [pageFormat]);

  const paddings = usePaddingsValues(styles, pageFormat, format);

  return (
    <div className={s.howBackgroundContainer}>
      <Section
        titleHidden={true}
        titleLevel={'h3'}
        style={{ backgroundColor: '#000000' }}
        pt={paddings.pt}
        pb={paddings.pb}
      >
        <h3 className={s.howTitle}>{data.ru.title}</h3>
        <div
          className={isTablet || isDesktop ? `${s.howTabletFlexContainer}` : ''}
        >
          <Video
            videoSrcURL={videoUrl}
            videoTitle={videoTitle}
            width={videoSizes.width}
            height={videoSizes.height}
            style={videoStyle}
          />

          <div className={s.howTextContentContainer}>
            <ul>
              {data.ru.content.textContent.map((el, index) => {
                return (
                  <li key={index}>
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
                      <div
                        className={`${s['howArrowBox' + index]}  ${
                          s.howArrowBox
                        }`}
                      >
                        {index < 3 && (
                          <img
                            src={
                              index === 2 && pageFormat === format.tablet
                                ? secondaryArrow
                                : arrow
                            }
                            alt={'arrow'}
                            className={s.arrowImage}
                          ></img>
                        )}
                      </div>
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
