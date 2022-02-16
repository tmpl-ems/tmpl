import React, { useEffect } from 'react';
import { overlay } from './_modal.module.scss';

const Modal = ({ children, closeModal }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });
  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return <div className={overlay} onClick={handleBackdropClick}></div>;
};
export default Modal;
