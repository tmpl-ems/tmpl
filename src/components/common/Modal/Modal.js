import React, { useEffect } from 'react';
import { overlay } from './modal.module.scss';

const Modal = ({ children, closeModal }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // disableScroll();
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });
  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };
  // function disableScroll(e) {
  //   window.addEventListener('touchmove', e.preventDefault, {
  //     passive: false,
  //   });
  // }

  return <div className={overlay} onClick={handleBackdropClick}></div>;
};
export default Modal;
