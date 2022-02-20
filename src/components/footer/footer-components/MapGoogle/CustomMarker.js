import React from 'react';
import { Marker } from '@react-google-maps/api';
export const CustomMarker = ({ position}) => { 
    return (
        <Marker position={position}
           icon={{url: '/location-pin.svg'}}
        ></Marker>
    )

}


