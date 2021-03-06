import React from 'react';
import styles from './VideoBox.scss';

import Crowd from './Crowd.mp4';
import Italy from './Italy.mp4';
import Starwars from './Starwars.mp4';

import banner1 from './banner1.png';
import pattern1 from './pattern1.jpg';
import Projects from './Projects.png';



{/* <div className="Starwars">
<img className="Star" src={star} alt="star-logo" 
/>
<img className="wars" src={wars} alt="wars-logo" 
/> */}

class VideoBox extends React.PureComponent {




  render() {
    return (
      <div id="videoDiv">
      <head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css" />
      </head>

        <div id="videoBlock1">
          <img src={pattern1} alt="Jonathan Bry" className="rotate901">
          </img>
          <img src={banner1} alt="Jonathan Bry" className="banner1">
          </img>
          <video autoPlay muted="false" loop id='container1'>
            <source src={Starwars} type="video/mp4"></source>
          </video>
          <div id="videoMessage1">
            <h1 class="animated infinite headShake" id="HotSpot1">StarWars Character Wiki SPA</h1>
            <h2 class="spacer">MERN stack with a JSON server Backend</h2>
            <p class="videoClick" >
              <a href="#" class="button hvr-grow">
                Click here and be impressed
              </a>
            </p>
            <button onClick={this.enableMute1}>
              M
            </button>
          </div>
        </div>

        <div id="videoBlock2">
          <img src={pattern1} alt="blah" className="rotate902">
          </img>
          <video autoPlay muted="false" loop id='container2'>
            <source src={Crowd} type="video/mp4"></source>
          </video>
          <div id="videoMessage2">
            <h1 class="animated infinite pulse" id="HotSpot2">RaveMom Festival Assistant</h1>
            <h2 class="spacer">Made In A MEAN Stack</h2>
            <h3 class="spacer">HACKTILLDAWN finalist</h3>
            <p class="videoClick" >
              <a href="https://www.hotelsafloat.com/home-away.php">Click here and be impressed</a>
            </p>
          </div>
        </div>

        <div id="videoBlock3">
          <img src={pattern1} alt="blah" className="rotate903">
          </img>
          <img src={pattern1} alt="blah" className="rotate904">
          </img>
          <video autoPlay muted loop id='container3'>
            <source src={Italy} type="video/mp4"></source>
          </video>
          <div id="videoMessage3">
            <h1 class="animated infinite tada" id="HotSpot3">HotSpot</h1>
            <h2 class="spacer">Co-working With a </h2>
            <h3 class="spacer">Connection</h3>
            <p class="videoClick" >
              <a href="https://www.hotelsafloat.com/home-away.php">Click here and be impressed</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoBox;