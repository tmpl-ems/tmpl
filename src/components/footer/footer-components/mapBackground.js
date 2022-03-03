import React from 'react';
import * as s from '../footer.module.scss';
import Pin from 'images/svg/location-pin.inline.svg';

const MapBackground = () => {
  return (
    <div className={`${s.mapBox}`}>
      <Pin className={`${s.pin}`} />
    </div>
  );
};
export default MapBackground;
