import React from 'react';
import Section from 'components/common/section/Section';
import Button from 'components/button/button';

// Пример использования СВГ
import LogoIcon from 'images/svg/logo.svg';

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
  return (
    <Section head={data.ru.title} titleHidden={false} titleLevel="h4">
      <p>{data.ru.content}</p>
      <LogoIcon width="200" height="200" />
      <Button />
    </Section>
  );
};

export default Example;
