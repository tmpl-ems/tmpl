import React from 'react';

import CloseIcon from 'images/svg/btn-close.inline.svg';
import AcceptIcon from 'images/svg/accept.inline.svg';
import ErrortIcon from 'images/svg/error.inline.svg';
import * as s from './Notification.module.scss';

export default function Notification({ closeModal, content, accept }) {
  return (
    <div className={s.modalContent}>
      <button className={s.closeBtn} type="button" onClick={() => closeModal()}>
        <CloseIcon />
      </button>

      <p className={s.title}>{content.title}</p>

      <p className={s.text}>{content.description}</p>

      <div className={s.image}>
        {accept ? (
          <AcceptIcon className={s.icon} />
        ) : (
          <ErrortIcon className={s.icon} />
        )}
      </div>
    </div>
  );
}
