import Battery1 from '../../../static/logos/Battery1.jpg';
import Battery2 from '../../../static/logos/Battery2.jpg';
import Battery3 from '../../../static/logos/Battery3.jpg';
import styles from './BatterySlider.scss';

import React from 'react';

import Carousel from 'nuka-carousel';

const BatterySlider = () => {
    return (
      <div class='content'>
      <Carousel class='content'>
        <img class='content' src={Battery3}/>
        <img class='content' src={Battery2}/>
        <img class='content' src={Battery1}/>

      </Carousel>
      </div>
    )
  };

export default BatterySlider;