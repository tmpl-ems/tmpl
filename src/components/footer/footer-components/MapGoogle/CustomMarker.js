import React from 'react';
import { Marker } from '@react-google-maps/api';
// import Pin from './location-pin.svg'
export const CustomMarker = ({ position}) => { 
    return (
        <Marker position={position}
            // icon={{ url: '../../../../images/icon/icon.png' }}
        ></Marker>
    )

}
// icon={{url: './location-pin.svg'}}

