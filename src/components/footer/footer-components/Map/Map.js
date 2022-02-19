import React, { useRef, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import LocationMarker from 'images/svg/location-pin.svg';

import { defaultTheme } from './Theme';

const containerStyle = {
  width: '608px',
  height: '270px',
};

const center = {
  lat: 50.4390243,
  lng: 30.5118283,
};

const defaultOptions = {
  panControl: true,
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  clickableIcons: false,
  keyboardShortcuts: false,
  scrollwheel: false,
  disableDoubleClickZoom: true,
  fullscreenControl: false,
  styles: defaultTheme,
};

const API_KEY = 'AIzaSyCDL1gLSaJnNhEo6Rb3fkOEgSg-qZS7XOo';
console.log(API_KEY);

export default function Map() {
  const mapRef = useRef(undefined);

  const onLoad = useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY,
  });

  return (
    <div>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={defaultOptions}
        >
          <Marker position={center} icon={LocationMarker} />
        </GoogleMap>
      ) : (
        <p>Загрузка карты...</p>
      )}
    </div>
  );
}
