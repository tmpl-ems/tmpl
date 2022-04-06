import React, { useRef, useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { useI18next } from 'gatsby-plugin-react-i18next';
import telegramBot from 'services/telegramBot';

import Button from 'components/common/button/button';
import CloseIcon from 'images/svg/btn-close.inline.svg';
import * as s from './SingUpForm.module.scss';

const initialNumberValue = '';
const validNumberLength = 12;
const validNameLength = 2;
const hashTag = 'tmplorder';
const isNumberRegex = new RegExp('[0-9]');

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
  selectedProgram = null,
}) => {
  const order = `<b>${orderMsg.toUpperCase()}</b>`;

  const tag = `%0A%23${hashTag}`;

  const lang = `%0A<b>${orderPlace}</b>: ${language}`;

  const clientInfo = `%0A%0A<b>${nameTitle}</b>: ${name} %0A<b>${phoneTitle}</b>: %2B${number}`;

  const programInfo = `%0A%0A<b>${programTitle}</b>: ${
    selectedProgram ? program : programDefault
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
      program: selectedProgram.item.title,
      programDefault: singUpForm.withoutPropram,
      selectedProgram,
    });

    telegramBot(text);
    notification();
    setSelectedProgram(null);
    closeModal();
  };

  const handleNumberChange = e => {
    const normalizedNumber = e.target.value
      .split('')
      .filter(item => isNumberRegex.test(item))
      .join('');

    setNumber(normalizedNumber);
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
        />

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
