const mask = '+38 (999) 999-99-99';
const validNameLength = { start: 2, end: 30 };
const validNumberLength = 12;
export const visibleMask = '+38 (___) ___-__-__';

export const initialNumberValue = '';
export const isValidNumberInputRegex = new RegExp('[0-9]');
// export const isValidNumberInputRegex = new RegExp('^\\+{1}|[0-9]');
export const isValidNameInputRegex = new RegExp(
  "[A-Za-zА-Яа-яґҐЁёІіЇїЄє'’ʼ\\s-]",
);

export const normalizeNameValue = (value, regexp) => {
  return value
    .split('')
    .filter(item => regexp.test(item))
    .join('');
};

export const normalizeNumberValue = (value, regexp) => {
  let preCheckValue = null;

  switch (true) {
    case value.length === 10 && value.startsWith('0'):
      preCheckValue = '38' + value;
      break;
    default:
      preCheckValue = value;
  }

  return preCheckValue
    .split('')
    .filter(item => regexp.test(item))
    .join('');
};

export const CheckisValidFormData = (name, phoneNumber) => {
  const isValidData =
    name.length >= validNameLength.start &&
    name.length <= validNameLength.end &&
    phoneNumber.length === validNumberLength;

  return isValidData;
};

export const CheckisValidPhoneNumber = phoneNumber =>
  phoneNumber.length === validNumberLength;

export const getInputMaskTemplate = inputValue => {
  switch (true) {
    case inputValue.startsWith('+'):
      return mask;
    case inputValue.startsWith('3') && inputValue.length > 1:
      return mask;
    case inputValue.startsWith('0') && inputValue.length > 2:
      return mask;
    case inputValue.startsWith('('):
      return mask;
    case inputValue.length > 2:
      return mask;
    default:
      return null;
  }
};
