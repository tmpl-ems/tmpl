import React, { useRef, useEffect } from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';

import Button from 'components/common/button/button';
import CloseIcon from 'images/svg/btn-close.svg';
import * as s from './SingUpForm.module.scss';

export default function SingUpForm({ closeModal }) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const { t } = useI18next();
  const data = t('common', { returnObjects: true });

  const handleSubmit = e => {
    e.preventDefault();
    closeModal();
  };

  return (
    <div className={s.modalContent}>
      <button className={s.closeBtn} type="button" onClick={() => closeModal()}>
        <CloseIcon />
      </button>

      <p className={s.text}>{data.singUpForm.text}</p>

      <form className={s.form} onSubmit={e => handleSubmit(e)}>
        <input
          ref={inputRef}
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder={data.singUpForm.namePlaceholder}
          autoComplete="off"
        />
        <input
          className={s.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder={data.singUpForm.numberPlaceholder}
          autoComplete="off"
        />

        <Button type="submit" classType={3} text={data.singUpForm.button} />
      </form>
    </div>
  );
}
