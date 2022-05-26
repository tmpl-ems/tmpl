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
import DotsLoader from '../animatedWrapper/dotsLoader/DotsLoader';

export default function SingUpForm({
  closeModal,
  setSelectedProgram,
  selectedProgram,
  notification,
}) {
  const nameInputRef = useRef(null);

  const [name, setName] = useState('');
  const [number, setNumber] = useState(initialNumberValue);
  const [maskTemplate, setMaskTemplate] = useState(null);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    nameInputRef.current.focus();
  }, []);

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

  const handleKeyDown = e => {
    if (!(e.key === 'Backspace' || e.key === 'Delete')) return;
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
    setIsSending(true);
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
        setIsSending(false);
      });
  };

  const isValidFormData = CheckisValidFormData(name, number);
  const { t } = useI18next();
  const { singUpForm, notification: content } = t('common', {
    returnObjects: true,
  });

  return (
    <div className={s.modalContent}>
      <button className={s.closeBtn} type="button" onClick={() => closeModal()}>
        <CloseIcon />
      </button>

      <p className={s.text}>{singUpForm.text}</p>

      <form className={s.form} onSubmit={e => handleSubmit(e)}>
        <InputMask
          ref={nameInputRef}
          mask={null}
          id="input-name"
          name="name"
          type="text"
          placeholder={singUpForm.namePlaceholder}
          required
          value={name}
          onChange={handleNameChange}
          className={s.input}
          autoComplete="off"
        />

        <InputMask
          mask={maskTemplate}
          name="phone"
          id="input-phone"
          className={s.input}
          placeholder={singUpForm.numberPlaceholder}
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
          text={isSending ? singUpForm.buttonLoading : singUpForm.button}
          loader={isSending ? <DotsLoader /> : null}
        />
      </form>
    </div>
  );
}
