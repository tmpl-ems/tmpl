import React, { useContext } from 'react';
import Section from 'components/common/section/Section';
import Video from 'components/common/video/video';
import { PageFormatContext, format } from 'context/pageFormatContext';

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

const How = () => {
  const videoUrl = 'https://www.youtube.com/embed/Ihvs5qt1Ut0';
  const videoTitle = 'YouTube video player';
  const pageFormat = useContext(PageFormatContext);
  const isTablet = pageFormat === format.tablet;

  return (
    <div className="howBackgroundContainer">
      <Section
        head={data.ru.title}
        titleHidden={true}
        titleLevel={'h3'}
        style={{ backgroundColor: '#000000' }}
      >
        <h3 className="howTitle">{data.ru.title}</h3>

        <Video
          videoSrcURL={videoUrl}
          videoTitle={videoTitle}
          width={280}
          height={266}
          style={{
            border: 'double 2px transparent',
            borderRadius: '16px',
            backgroundImage:
              ' linear-gradient(180deg, #20c5a0 0%, #0a866a 100%)',
            backgroundOrigin: 'border-box',
            backgroundClip: 'content-box border-box',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />

        <div className="howTextContentContainer">
          <ul>
            {data.ru.content.textContent.map((el, index) => {
              return (
                <li key={index}>
                  <div className={`howTextBox${index} howTextBox`}>
                    <p className={`howNumber howNumber${index}`}>{el.number}</p>
                    <p className={`howCommonText${index} howCommonText`}>
                      {el.text}
                    </p>
                    <div className={`'howArrowBox${index}'`}></div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Section>{' '}
    </div>
  );
};

export default How;
