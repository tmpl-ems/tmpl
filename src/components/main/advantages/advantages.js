import React from 'react';
import * as s from './advantages.module.scss';
import Section from 'components/common/section/section';
import AdvIcon1 from 'images/svg/adv-comfort.svg';
import AdvIcon3 from 'images/svg/adv-motivation.svg';
import AdvIcon4 from 'images/svg/adv-result.svg';
import AdvIcon2 from 'images/svg/adv-safety.svg';
import AdvantagesList from './advantagesList';
import { useI18next } from 'gatsby-plugin-react-i18next';

export default function Advantages({ id }) {
  const { t } = useI18next();

  const data = t('advantages', { returnObjects: true });
  return (
    <>
      <Section titleLevel="h2" id={id}>
        <div className={s.container}>
          <div className={s.head}>
            <p className={s.info}>{data.suptitle}</p>
            <h3 className={s.mainTitle}>{data.title}</h3>
          </div>
          <ul className={`${s.mainList} list`}>
            <li className={s.mainItem}>
              <AdvIcon1 className={s.icon} />
              <h4 className={s.title}>{data.comfortListTitle}</h4>
              <AdvantagesList list={data.comfortListContent} />
            </li>
            <li className={s.mainItem}>
              <AdvIcon2 className={s.icon} />
              <h4 className={s.title}>{data.securityListTitle}</h4>
              <AdvantagesList list={data.securityListContent} />
            </li>
            <li className={s.mainItem}>
              <AdvIcon3 className={s.icon} />
              <h4 className={s.title}>{data.motivationListTitle}</h4>
              <AdvantagesList list={data.motivationListContent} />
            </li>
            <li className={s.mainItem}>
              <AdvIcon4 className={s.icon} />
              <h4 className={s.title}>{data.resultListTitle}</h4>
              <AdvantagesList list={data.resultListContent} />
            </li>
          </ul>
          <p className={s.result}>{data.text}</p>
        </div>
      </Section>
    </>
  );
}
