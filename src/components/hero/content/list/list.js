import React from 'react';
import * as s from './list.module.scss';

const List = ({ data }) => {
  return (
    <ul className={s.list}>
      {data.map((item, i) => (
        <li key={i} className={s.listItem}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default List;
