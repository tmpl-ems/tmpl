import React from 'react';

import Button from 'components/common/button/button';
import CloseIcon from 'images/svg/btn-close.svg';
import * as s from './SingUpForm.module.scss';

export default function SingUpForm({ closeModal }) {
  const handleSubmit = e => {
    e.preventDefault();
    closeModal();
  };

  return (
    <div className={s.modalContent}>
      <button className={s.closeBtn} type="button" onClick={() => closeModal()}>
        <CloseIcon />
      </button>

      <p className={s.text}>
        Для того, чтобы записаться, пожалуйста, введите свое имя и номер
        телефона
      </p>

      <form className={s.form} onSubmit={e => handleSubmit(e)}>
        <input
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Имя"
        />
        <input
          className={s.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Номер"
        />

        <Button type="submit" classType={3} text="Отправить" />
      </form>
    </div>
  );
}
