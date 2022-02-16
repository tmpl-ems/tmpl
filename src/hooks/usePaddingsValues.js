import { useState, useEffect } from 'react';

/*

Хук, нужен, чтобы посчитать нижний и верхний паддинг, в зависимости от ширины вьюпорта.
Принимает:

styles - объект с данными по отступам в следующем формате

const styles = {
  response: { pt: 20, pb: 30 },
  mobile: { pt: 30, pb: 0 },
  tablet: { pt: 40, pb: 40 },
  desktop: { pt: 60, pb: 80 },
};

CurrentPageFormat - это pageFormat из useContext(PageFormatContext);
format - это format из import { format } from 'context/pageFormatContext';

*/

export const usePaddingsValues = (styles, CurrentPageFormat, format) => {
  const [paddings, setPaddings] = useState(styles.response);

  useEffect(() => {
    const getPaddings = () => {
      switch (CurrentPageFormat) {
        case format.response:
          setPaddings(styles.response);
          break;
        case format.mobile:
          setPaddings(styles.mobile);
          break;
        case format.tablet:
          setPaddings(styles.tablet);
          break;
        case format.desktop:
          setPaddings(styles.desktop);
          break;
        default:
          return setPaddings({ pt: null, pb: null });
      }
    };
    getPaddings();
  }, [
    CurrentPageFormat,
    format.desktop,
    format.mobile,
    format.response,
    format.tablet,
    styles.desktop,
    styles.mobile,
    styles.response,
    styles.tablet,
  ]);

  return paddings;
};
