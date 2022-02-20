import React, { useContext, useEffect, useState } from 'react';
import Section from 'components/common/section/section';
import Video from 'components/common/video/video';
import { PageFormatContext, format } from 'context/pageFormatContext';
import { usePaddingsValues } from 'hooks/usePaddingsValues';
import { useI18next } from 'gatsby-plugin-react-i18next';

import * as s from './how.module.scss';

const styles = {
  response: { pt: 40, pb: 40 },
  mobile: { pt: 40, pb: 40 },
  tablet: { pt: 60, pb: 84 },
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

const How = ({ id }) => {
  const videoUrl = 'https://www.youtube.com/embed/HUZLr7XmdmU';
  const videoTitle = 'YouTube video player';

  const { t } = useI18next();
  const data = t('how', { returnObjects: true });

  const pageFormat = useContext(PageFormatContext);
  const [videoSizes, setVideoSizes] = useState({ width: 280, height: 266 });
  const [videoStyle, setVideoStyle] = useState({
    ...videoStyles.common,
    ...videoStyles.mobile,
  });
  const isTablet = pageFormat === format.tablet;

  const isDesktop = pageFormat === format.desktop;

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
        head={data.title}
        titleHidden={true}
        titleLevel={'h3'}
        style={{ backgroundColor: '#000000' }}
        pt={paddings.pt}
        pb={paddings.pb}
        id={id}
      >
        <p className={s.howTitle}>{data.suptitle}</p>
        <div
          className={isTablet || isDesktop ? `${s.howTabletFlexContainer}` : ''}
        >
          <div className={s.videoWpapper}>
            <Video
              videoSrcURL={videoUrl}
              videoTitle={videoTitle}
              width={videoSizes.width}
              height={videoSizes.height}
              style={videoStyle}
            />
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
