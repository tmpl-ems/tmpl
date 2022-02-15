import React, { useContext } from 'react';

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

  const pageFormat = useContext(PageFormatContext);
  const isTablet = pageFormat === format.tablet;

  return (
    <Section head={data.ru.title} titleHidden={false} titleLevel="h4">
      <p>{data.ru.content}</p>
      {isTablet && <LogoIcon width="200" height="200" />}
      <Button classType={3} type={'button'} />
    </Section>
  );
};

export default Example;
