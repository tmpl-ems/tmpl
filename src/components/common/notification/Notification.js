import React from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';

import CloseIcon from 'images/svg/btn-close.inline.svg';
import notificationIcon from 'images/icon/notification-icon.jpg';
import * as s from './Notification.module.scss';

export default function Notification({ closeModal }) {
  const { t } = useI18next();
  const data = t('common', { returnObjects: true });

  return (
    <div className={s.modalContent}>
      <button className={s.closeBtn} type="button" onClick={() => closeModal()}>
        <CloseIcon />
      </button>

      <p className={s.title}>{data.notification.title}</p>

      <p className={s.text}>{data.notification.text}</p>

      <div className={s.image}>
        <img
          src={notificationIcon}
          alt="success"
          onClick={() => closeModal()}
        />
      </div>
    </div>
  );
}
