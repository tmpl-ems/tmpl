import React from 'react';

import * as s from './Notification.module.scss';

export default function Notification() {
  return (
    <div className={s.modalContent}>
      Дані успішно надіслані. Чекайте, з вами зв'яжуться найближчим часом.
    </div>
  );
}
