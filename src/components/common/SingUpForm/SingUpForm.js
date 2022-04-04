import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';
import telegramBot from 'services/telegramBot';

import Button from 'components/common/button/button';
import CloseIcon from 'images/svg/btn-close.inline.svg';
import * as s from './SingUpForm.module.scss';

const numberStart = '+380';

export default function SingUpForm({
  closeModal,
  setSelectedProgram,
  selectedProgram,
  notification,
}) {
  const inputRef = useRef(null);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const { t } = useI18next();
  const { singUpForm } = t('common', { returnObjects: true });

  const getTextToSend = useCallback(() => {
    const order = `<b>${singUpForm.order.toUpperCase()}</b>`;

    const tag = '%0A%23tmplorder';

    const lang = `%0A<b>${singUpForm.langOrderPlace}</b>: ${singUpForm.lang}`;

    const clientInfo = `%0A%0A<b>${
      singUpForm.namePlaceholder
    }</b>: ${name} %0A<b>${singUpForm.phone}</b>: %2B${number.slice(1)}`;

    const programInfo = selectedProgram
      ? `%0A%0A<b>${singUpForm.program}</b>: ${selectedProgram.item.title}`
      : `%0A<b>${singUpForm.withoutPropram}</b>`;
    return order + tag + lang + clientInfo + programInfo;
  }, [
    name,
    number,
    selectedProgram,
    singUpForm.lang,
    singUpForm.langOrderPlace,
    singUpForm.namePlaceholder,
    singUpForm.order,
    singUpForm.phone,
    singUpForm.program,
    singUpForm.withoutPropram,
  ]);

  const handleSubmit = e => {
    e.preventDefault();
    const text = getTextToSend();

    telegramBot(text);
    notification();
    setSelectedProgram(null);
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

      <p className={s.text}>{singUpForm.text}</p>

      <form className={s.form} onSubmit={e => handleSubmit(e)}>
        <input
          ref={inputRef}
          className={s.input}
          type="text"
          name="name"
          pattern="[A-Za-zА-Яа-яґҐЁёІіЇїЄє'’ʼ\s-]{2,20}"
          onInvalid={e => e.target.setCustomValidity(singUpForm.nameValidation)}
          onInput={e => e.target.setCustomValidity('')}
          onChange={e => setName(e.target.value)}
          required
          placeholder={singUpForm.namePlaceholder}
          autoComplete="off"
          value={name}
        />
        <input
          className={s.input}
          type="tel"
          name="number"
          pattern="^(?:\+38)?(0\d{9})$"
          onInvalid={e =>
            e.target.setCustomValidity(singUpForm.phoneValidation)
          }
          onInput={e => e.target.setCustomValidity('')}
          onChange={e => setNumber(e.target.value)}
          onFocus={e => handleFocus(e)}
          onBlur={e => handleBlur(e)}
          required
          placeholder={singUpForm.numberPlaceholder}
          autoComplete="off"
          value={number}
        />

        <Button type="submit" classType={3} text={singUpForm.button} />
      </form>
    </div>
  );
}
