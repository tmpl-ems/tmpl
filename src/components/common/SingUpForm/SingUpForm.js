import React, { useRef, useEffect, useState } from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';

import Button from 'components/common/button/button';
import CloseIcon from 'images/svg/btn-close.inline.svg';
import * as s from './SingUpForm.module.scss';

import telegramBot from 'services/telegramBot';

const initialNumberFormat = '+380';

export default function SingUpForm({
  closeModal,
  setSelectedProgram,
  selectedProgram,
  notification,
}) {
  const inputRef = useRef(null);

  const [name, setName] = useState('');
  const [number, setNumber] = useState(initialNumberFormat);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const { t } = useI18next();
  const data = t('common', { returnObjects: true });

  const handleSubmit = e => {
    e.preventDefault();
    const text = `Имя: ${name}, Телефон: ${number}${
      selectedProgram
        ? `, Программа: ${selectedProgram.item.title}`
        : ', Без программы'
    }`;
    telegramBot(text);
    notification();
    setSelectedProgram(null);
    closeModal();
  };

  const handleChange = e => {
    const inputName = e.target.name;
    const value = e.target.value;

    if (inputName === 'name') {
      setName(value);
    }
    if (inputName === 'number') {
      // if (
      //   !value.includes(initialNumberFormat) ||
      //   value[0] !== initialNumberFormat[0]
      // )
      //   return;

      setNumber(value);
    }
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
          onChange={handleChange}
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
          onChange={handleChange}
          onFocus={e => {
            if (number !== '') return;
            e.target.value = initialNumberFormat;
          }}
          onBlur={e => {
            if (e.target.value !== initialNumberFormat) return;
            setNumber('');
            e.target.value = '';
          }}
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
