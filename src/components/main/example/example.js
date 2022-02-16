import React, { useContext, useEffect, useState } from 'react';

// Если в нашем компоненте нужно выполнить или нет рендеринг в зависимости от ширины экрана, берём испортируем контекст и формат. А такэе useContext
import { PageFormatContext, format } from 'context/pageFormatContext';
import Section from 'components/common/section/Section';

// Пример использования СВГ
import LogoIcon from 'images/svg/logo.svg';
import Button from 'components/common/button/button';

// Пример организации данных, можете напрямую в конпонент писать, но в будущем, вероятнее всего нужно будет выносить весть текст в отдельные json файлы и струкрута будет примерно такой.
const data = {
  ru: {
    title: 'Заголовок секции',
    content:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores temporibus illum Laborum sequi corrupti suscipit quaerat. Mollitia nemo et rerum, fuga veritatis tempora inventore ab doloribus perferendis animi quasi',
  },
  ukr: {
    title: 'Заголовок секції',
    content:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores temporibus illum Laborum sequi corrupti suscipit quaerat. Mollitia nemo et rerum, fuga veritatis tempora inventore ab doloribus perferendis animi quasi',
  },
};

const Example = () => {
  // забираем значение ширины экрана, которое высчитывается в компоненте Layout и реализуем рендеринг по условию
  const [paddings, setPaddings] = useState({ pt: null, pb: null });
  const pageFormat = useContext(PageFormatContext);
  const isTablet = pageFormat === format.tablet;

  useEffect(() => {
    const getPaddings = () => {
      switch (pageFormat) {
        case format.response:
          setPaddings({ pt: 20, pb: 30 });
          break;
        case format.mobile:
          setPaddings({ pt: 30, pb: 0 });
          break;
        case format.tablet:
          setPaddings({ pt: 40, pb: 40 });
          break;
        case format.desktop:
          setPaddings({ pt: 60, pb: 80 });
          break;
        default:
          return setPaddings({ pt: null, pb: null });
      }
    };
    getPaddings();
  }, [pageFormat]);

  return (
    <Section
      head={data.ru.title}
      titleHidden={false}
      titleLevel="h4"
      pt={paddings.pt}
      pb={paddings.pb}
    >
      <p>{data.ru.content}</p>
      {isTablet && <LogoIcon width="200" height="200" />}
      <Button classType={3} type={'button'} />
    </Section>
  );
};

export default Example;
