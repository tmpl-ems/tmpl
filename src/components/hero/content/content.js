import React, { useContext } from 'react';
import { PageFormatContext, format } from 'context/pageFormatContext';
import Button from 'components/common/button/button';
import List from './list/list';
import * as s from './content.module.scss';

const Content = () => {
  const pageFormat = useContext(PageFormatContext);
  const isTablet = pageFormat === format.tablet;
  const isDesktop = pageFormat === format.desktop;

  return (
    <div className={s.contentBlock}>
      <h1 className={s.sectionTitle}>
        EMS-тренировки <br />в центре Киева
      </h1>
      <p className={s.text1}>
        Создайте идеальную форму, занимаясь по 30 минут:
      </p>
      {(isDesktop || isTablet) && <List />}
      {isDesktop || isTablet ? (
        <Button classType={1} type={'button'} />
      ) : (
        <Button classType={4} type={'button'} />
      )}

      <div className={s.offerBlock}>
        <p className={s.text2}>
          Записывайтесь на пробную <br />
          тренировку за
          <span className={s.text2_span}>750 грн.</span>
        </p>
        <p className={s.price}>350 грн.</p>
      </div>

      {!isDesktop && !isTablet && <List />}
    </div>
  );
};

export default Content;
