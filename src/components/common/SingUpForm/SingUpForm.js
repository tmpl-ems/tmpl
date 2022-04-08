import React, { useRef, useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { sendMessage, getTelegramMessage } from 'services/telegramBot';
import {
  visibleMask,
  initialNumberValue,
  isValidNumberInputRegex,
  isValidNameInputRegex,
  normalizeNameValue,
  normalizeNumberValue,
  CheckisValidFormData,
  getInputMaskTemplate,
} from 'services/formDataServices';

import Button from 'components/common/button/button';
import CloseIcon from 'images/svg/btn-close.inline.svg';
import * as s from './SingUpForm.module.scss';

export default function SingUpForm({
  closeModal,
  setSelectedProgram,
  selectedProgram,
  notification,
}) {
  const inputRef = useRef(null);

  const [name, setName] = useState('');
  const [number, setNumber] = useState(initialNumberValue);
  const [maskTemplate, setMaskTemplate] = useState(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const { t } = useI18next();
  const { singUpForm, notification: content } = t('common', {
    returnObjects: true,
  });

  const handleNameChange = e => {
    const normalizedValue = normalizeNameValue(
      e.target.value,
      isValidNameInputRegex,
    );
    setName(normalizedValue);
  };

  const handleNumberChange = e => {
    const value = e.target.value;
    if (value.length > maskTemplate?.length) return;
    if (!maskTemplate) {
      const mask = getInputMaskTemplate(value);
      if (mask) {
        setMaskTemplate(mask);
      }
    }

    const normalizedPhoneValue = normalizeNumberValue(
      value,
      isValidNumberInputRegex,
    );
    setNumber(normalizedPhoneValue);
  };

  const isValidFormData = CheckisValidFormData(name, number);

  const handleKeyDown = e => {
    if (!(e.code === 'Backspace' || e.code === 'Delete')) return;
    if (e.target.value !== visibleMask) return;
    setMaskTemplate(null);
    setNumber(initialNumberValue);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const text = getTelegramMessage({
      orderMsg: singUpForm.order,
      orderPlace: singUpForm.langOrderPlace,
      language: singUpForm.lang,
      nameTitle: singUpForm.namePlaceholder,
      name,
      phoneTitle: singUpForm.phone,
      number,
      programTitle: singUpForm.program,
      program: selectedProgram?.item.title,
      programDefault: singUpForm.withoutPropram,
    });

    if (!isValidFormData) return;

    sendMessage(text)
      .then(() => {
        notification(content.title, content.text, true);
      })
      .catch(() => {
        notification(content.titleError, content.textError, false);
      })
      .finally(() => {
        setSelectedProgram(null);
        closeModal();
      });
  };

  return (
    <div className={s.modalContent}>
      <button className={s.closeBtn} type="button" onClick={() => closeModal()}>
        <CloseIcon />
      </button>

      <p className={s.text}>{singUpForm.text}</p>

      <form className={s.form} onSubmit={e => handleSubmit(e)}>
        <InputMask
          ref={inputRef}
          mask={null}
          id="input-name"
          name="name"
          type="text"
          // maskChar={null}
          placeholder={singUpForm.namePlaceholder}
          required
          value={name}
          onChange={e => e.preventDefault()}
          onInput={handleNameChange}
          className={s.input}
          autoComplete="off"
        />

        <InputMask
          mask={maskTemplate}
          name="phone"
          id="input-phone"
          className={s.input}
          placeholder={singUpForm.numberPlaceholder}
          // onChange={e => e.preventDefault()}
          onChange={e => handleNumberChange(e)}
          type="tel"
          autoComplete="on"
          value={number}
          onKeyDown={handleKeyDown}
        />

        <Button
          disabled={!isValidFormData}
          type="submit"
          classType={3}
          text={singUpForm.button}
        />
      </form>
    </div>
  );
}
