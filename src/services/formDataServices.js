export const initialNumberValue = '';
export const isValidNumberInputRegex = new RegExp('^\\+{1}|[0-9]');
export const isValidNameInputRegex = new RegExp(
  "[A-Za-zА-Яа-яґҐЁёІіЇїЄє'’ʼ\\s-]",
);

export const normalizeValue = (value, regexp) => {
  const formattedValue = value
    .split('')
    .filter(item => regexp.test(item))
    .join('');

  switch (true) {
    case formattedValue.length === 10 && formattedValue.startsWith('0'):
      return '38' + formattedValue;
    case formattedValue.length === 7 && !formattedValue.startsWith('380'):
      return '38044' + formattedValue;
    default:
      return formattedValue;
  }
};

export const CheckisValidFormData = (name, phoneNumber) => {
  const validNumberLength = 12;
  const validNameLength = { start: 2, end: 30 };

  const isValidData =
    name.length >= validNameLength.start &&
    name.length <= validNameLength.end &&
    phoneNumber.length === validNumberLength;

  return isValidData;
};

export const getInputMask = inputValue => {
  switch (true) {
    case inputValue.startsWith('+') && inputValue.length > 1:
      return '+38 (999) 999-99-99';
    case inputValue.startsWith('38') && inputValue.length > 1:
      return '+38 (999) 999-99-99';
    case inputValue.startsWith('0') && inputValue.length > 2:
      return '+38 (099) 999-99-99';
    case inputValue.startsWith('('):
      return '+38 (099) 999-99-99';
    case inputValue.length > 2:
      return '+38 (044) 999-99-99';
    default:
      return null;
  }
};
