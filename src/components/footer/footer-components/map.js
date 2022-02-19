// API KEY AIzaSyCGpLxHF1iuEsPHyrhHg8f2xmY2SwvNWdU
import React from 'react';
import * as s from '../footer.module.scss';
import Pin from 'images/svg/location-pin.svg';

const Map = () => { 
    return (
        <div className={`${s.mapBox}`}>
            <iframe
              title="Location"
              className={`${s.map} visually-hidden`}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.1116552967246!2d30.511828315216917!3d50.43902087947373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cefbfd9de6bd%3A0xa7a14e04df77f9e6!2z0LLRg9C7LiDQkNC90YLQvtC90L7QstC40YfQsCwgMywg0JrQuNGX0LIsIDAyMDAw!5e0!3m2!1suk!2sua!4v1645013340155!5m2!1suk!2sua"
              // disableDefaultUI={ true}
              // allowfullscreen
              // loading
            ></iframe>
            <Pin className={`${s.pin}`} />
          </div>
    )
}
export default Map;