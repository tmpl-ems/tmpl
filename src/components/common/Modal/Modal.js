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
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  });
  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return (
    <div className={overlay} onClick={handleBackdropClick} id="modal-window">
      {children}
    </div>
  );
};
export default Modal;
