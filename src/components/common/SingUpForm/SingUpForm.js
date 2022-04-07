import React, { useRef, useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { useI18next } from 'gatsby-plugin-react-i18next';
import telegramBot from 'services/telegramBot';

import Button from 'components/common/button/button';
import CloseIcon from 'images/svg/btn-close.inline.svg';
import * as s from './SingUpForm.module.scss';

// const numberStart = '+380';

const initialNumberValue = '';
const validNumberLength = 12;
const validNameLength = 2;
const hashTag = 'tmplorder';
const isNumberRegex = new RegExp('[0-9]');
const normalizePhoneValue = phoneValue =>
  phoneValue
    .split('')
    .filter(item => isNumberRegex.test(item))
    .join('');

const getTextToSend = ({
  orderMsg,
  orderPlace,
  language,
  hashTag,
  nameTitle,
  name,
  phoneTitle,
  number,
  programTitle,
  program,
  programDefault,
}) => {
  const order = `<b>${orderMsg.toUpperCase()}</b>`;

  const tag = `%0A%23${hashTag}`;

  const lang = `%0A<b>${orderPlace}</b>: ${language}`;

  const clientInfo = `%0A%0A<b>${nameTitle}</b>: ${name} %0A<b>${phoneTitle}</b>: %2B${number}`;

  const programInfo = `%0A%0A<b>${programTitle}</b>: ${
    program ? program : programDefault
  }`;

  return order + tag + lang + clientInfo + programInfo;
};

export default function SingUpForm({
  closeModal,
  setSelectedProgram,
  selectedProgram,
  notification,
}) {
  const inputRef = useRef(null);

  const [name, setName] = useState('');
  const [number, setNumber] = useState(initialNumberValue);
  // const [numberClear, setNumberClear] = useState(initialNumberValue);
  const [maskTemplate, setMaskTemplate] = useState(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const { t } = useI18next();
  const { singUpForm } = t('common', { returnObjects: true });

  const handleSubmit = e => {
    e.preventDefault();
    const text = getTextToSend({
      orderMsg: singUpForm.order,
      orderPlace: singUpForm.langOrderPlace,
      language: singUpForm.lang,
      hashTag,
      nameTitle: singUpForm.namePlaceholder,
      name,
      phoneTitle: singUpForm.phone,
      number,
      programTitle: singUpForm.program,
      program: selectedProgram?.item.title,
      programDefault: singUpForm.withoutPropram,
    });

    telegramBot(text);
    notification();
    setSelectedProgram(null);
    closeModal();
  };

  // const handleFocus = e => {
  //   if (numberClear !== '') return;
  //   e.target.value = numberStart;
  // };

  // const handleBlur = e => {
  //   if (e.target.value !== numberStart) return;
  //   setNumberClear('');
  //   e.target.value = '';
  // };

  const handleNumberChange = e => {
    const normalizedPhoneValue = normalizePhoneValue(e.target.value);
    setNumber(normalizedPhoneValue);
  };

  const handleClearNumberChange = e => {
    const value = e.target.value;

    if (!maskTemplate) {
      switch (true) {
        case value.startsWith('+') && value.length > 2:
          setMaskTemplate('+38 (999) 999-99-99');
          break;
        case value.startsWith('38') && value.length > 1:
          setMaskTemplate('+38 (999) 999-99-99');
          break;
        case value.startsWith('0') && value.length > 1:
          setMaskTemplate('+38 (099) 999-99-99');
          break;
        case value.length > 2:
          setMaskTemplate('+38 (044) 999-99-99');
          break;
        default:
          break;
      }
    }

    const normalizedPhoneValue = normalizePhoneValue(value);
    setNumber(normalizedPhoneValue);
  };

  const isDisabled =
    !(name.length >= validNameLength) || !(number.length === validNumberLength);

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
          pattern="[A-Za-zА-Яа-яґҐЁёІіЇїЄє'’ʼ\s-]{2,30}"
          onInvalid={e => e.target.setCustomValidity(singUpForm.nameValidation)}
          onInput={e => e.target.setCustomValidity('')}
          onChange={e => setName(e.target.value)}
          required
          placeholder={singUpForm.namePlaceholder}
          autoComplete="off"
          value={name}
        />

        <InputMask
          mask="+38 (099) 999-99-99"
          className={s.input}
          placeholder={singUpForm.numberPlaceholder}
          onChange={e => handleNumberChange(e)}
          type="tel"
          autoComplete="off"
        />

        <InputMask
          mask={maskTemplate}
          className={s.input}
          placeholder={singUpForm.numberPlaceholder}
          onChange={e => handleClearNumberChange(e)}
          type="tel"
          autoComplete="on"
        />

        {/* <input
          className={s.input}
          type="tel"
          name="numberClear"
          pattern="^(?:\+38)?(0\d{9})$"
          onInvalid={e =>
            e.target.setCustomValidity(singUpForm.phoneValidation)
          }
          onInput={e => e.target.setCustomValidity('')}
          onChange={e => setNumberClear(e.target.value)}
          onFocus={e => handleFocus(e)}
          onBlur={e => handleBlur(e)}
          required
          placeholder={singUpForm.numberPlaceholder}
          autoComplete="on"
          value={numberClear}
        /> */}

        <Button
          disabled={isDisabled}
          type="submit"
          classType={3}
          text={singUpForm.button}
        />
      </form>
    </div>
  );
}
