import React from 'react';
import * as s from './goals.module.scss';
import { useI18next } from 'gatsby-plugin-react-i18next';

import Section from 'components/common/section/section';
import Button from 'components/common/button/button';
import { sortItems } from 'services/services';

export default function Goals({ onSingUpModalOpen, id }) {
  const { t } = useI18next();

  const data = t('goals', { returnObjects: true });

  console.log('data', data);

  return (
    <Section
      id={id}
      titleLevel="h2"
      head={data.title}
      darkBackground={true}
      containerClass={s.container}
    >
      <div className={s.suptitlesWrapper}>
        <p className={s.subtitle}>{data.suptitle1}</p>
        <p className={s.subtitle}>{data.suptitle2}</p>
        <p className={s.subtitle}>{data.suptitle3}</p>
      </div>

      <ul className={s.list}>
        {sortItems(data.results).map((item, idx) => (
          <li className={s.item} key={idx}>
            {item}
          </li>
        ))}
      </ul>

      <Button
        text={data.button}
        classType={1}
        addClass={s.button}
        onBtnClick={onSingUpModalOpen}
      />

      <div className={s.lightningUp}></div>
      <div className={s.lightningDown}></div>
    </Section>
  );
}
