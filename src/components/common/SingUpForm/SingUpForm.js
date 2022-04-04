import React, { useRef, useEffect, useState } from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';

import Button from 'components/common/button/button';
import CloseIcon from 'images/svg/btn-close.inline.svg';
import * as s from './SingUpForm.module.scss';

const numberStart = '+380';

export default function SingUpForm({ closeModal }) {
  const inputRef = useRef(null);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const { t } = useI18next();
  const data = t('common', { returnObjects: true });

  const handleSubmit = e => {
    e.preventDefault();
    closeModal();
  };

  const handleFocus = e => {
    if (number !== '') return;
    e.target.value = numberStart;
  };

  const handleBlur = e => {
    if (e.target.value !== numberStart) return;
    setNumber('');
    e.target.value = '';
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
          pattern="[A-Za-zА-Яа-яґҐЁёІіЇїЄє'’ʼ\s-]{2,20}"
          onInvalid={e =>
            e.target.setCustomValidity(data.singUpForm.nameValidation)
          }
          onInput={e => e.target.setCustomValidity('')}
          onChange={e => setName(e.target.value)}
          required
          placeholder={data.singUpForm.namePlaceholder}
          autoComplete="off"
          value={name}
        />
        <input
          className={s.input}
          type="tel"
          name="number"
          pattern="^(?:\+38)?(0\d{9})$"
          onInvalid={e =>
            e.target.setCustomValidity(data.singUpForm.phoneValidation)
          }
          onInput={e => e.target.setCustomValidity('')}
          onChange={e => setNumber(e.target.value)}
          onFocus={e => handleFocus(e)}
          onBlur={e => handleBlur(e)}
          required
          placeholder={data.singUpForm.numberPlaceholder}
          autoComplete="off"
          value={number}
        />

        <Button type="submit" classType={3} text={data.singUpForm.button} />
      </form>
    </div>
  );
}
