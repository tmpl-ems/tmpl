import React from 'react';
import * as s from '../footer.module.scss';
import CopyRight from 'images/svg/footer-copyright.inline.svg';

const CopyRightBlock = () => {
  return (
    <>
      <p className={`${s.copyRight}`}>
        <span className={`${s.copyRightSign}`}>
          <CopyRight />
        </span>
        2022
      </p>
    </>
  );
};
export default CopyRightBlock;
