import React, { useRef, useCallback } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import MapBackground from '../mapBackground';
import { CustomMarker } from './CustomMarker';
import * as s from '../../footer.module.scss';
import { defaultTheme } from './Theme';

const center = {
  lat: 50.43951642646362,
  lng: 30.513965945504467,
};
const markerPosition = {
  lat: 50.43913471735236,
  lng: 30.514003877665044,
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

const API_KEY = process.env.API_KEY;

export default function MapGoogle() {
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
    <div className={s.mapBox}>
      {isLoaded ? (
        <GoogleMap
          mapContainerClassName={s.map}
          center={center}
          zoom={16}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={defaultOptions}
        >
          <CustomMarker position={markerPosition} />
        </GoogleMap>
      ) : (
        <MapBackground />
      )}
    </div>
  );
}
