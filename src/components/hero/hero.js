// import React, { useContext } from 'react';

// // Если в нашем компоненте нужно выполнить или нет рендеринг в зависимости от ширины экрана, берём испортируем контекст и формат. А такэе useContext
// import { PageFormatContext, format } from 'context/pageFormatContext';
// import Section from 'components/common/section/Section';
// import LogoIcon from 'images/svg/logo.svg';

// const Header = () => {
//   return <header></header>;
// };

// export default Header;

// const Example = () => {
//   // забираем значение ширины экрана, которое высчитывается в компоненте Layout и реализуем рендеринг по условию

//   const pageFormat = useContext(PageFormatContext);
//   const isTablet = pageFormat === format.tablet;

//   return (
//     <Section head={data.ru.title} titleHidden={false} titleLevel="h4">
//       <p>{data.ru.content}</p>
//       {isTablet && <LogoIcon width="200" height="200" />}
//       <Button classType={3} type={'button'} />
//     </Section>
//   );
// };

// export default Example;
