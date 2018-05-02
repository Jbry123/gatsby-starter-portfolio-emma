import DroneImage1 from '../../../static/logos/logo-48.jpg';
import DroneImage2 from '../../../static/logos/logo-192x192.jpg';
import DroneImage3 from '../../../static/logos/logo-512x512.jpg';
import styles from './Slider.scss';

import React from 'react';

import Carousel from 'nuka-carousel';

const Slider = () => {
    return (
      <div class='content'>
      <Carousel class='content'>
        <img class='content' src={DroneImage3}/>
        <img class='content' src={DroneImage2}/>
        <img class='content' src={DroneImage1}/>

      </Carousel>
      </div>
    )
  };

export default Slider;