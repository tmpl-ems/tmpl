import React from 'react';

import CloseIcon from 'images/svg/btn-close.inline.svg';
import notificationIcon from 'images/icon/notification-icon.jpg';
import * as s from './Notification.module.scss';

export default function Notification({ closeModal, content, accept }) {
  return (
    <div className={s.modalContent}>
      <button className={s.closeBtn} type="button" onClick={() => closeModal()}>
        <CloseIcon />
      </button>

      <p className={s.title}>{content.title}</p>

      <p className={s.text} style={!accept ? { marginBottom: '0' } : null}>
        {content.description}
      </p>

      {accept && (
        <div className={s.image}>
          <img
            className={s.icon}
            src={notificationIcon}
            alt="success"
            onClick={() => closeModal()}
          />
        </div>
      )}
    </div>
  );
}
