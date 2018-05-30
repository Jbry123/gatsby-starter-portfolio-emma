import React from 'react';
import styles from './VideoBox.scss';

{/* <div className="Starwars">
<img className="Star" src={star} alt="star-logo" 
/>
<img className="wars" src={wars} alt="wars-logo" 
/> */}

class VideoBox extends React.PureComponent {




  render() {
    return (
      <div id="videoDiv">

        <div id="videoBlock1">
          <img src="pattern1.jpg" alt="Jonathan Bry" className="rotate901">
          </img>
          <img src="banner1.png" alt="Jonathan Bry" className="banner1">
          </img>
          <video autoPlay muted="false" loop id='container1'>
            <source src="VDJ1Loop.mp4" type="video/mp4"></source>
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
          <img src="pattern1.jpg" alt="blah" className="rotate902">
          </img>
          <video autoPlay muted="false" loop id='container2'>
            <source src="CraziestCrowd.mp4" type="video/mp4"></source>
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
          <img src="pattern1.jpg" alt="blah" className="rotate903">
          </img>
          <img src="pattern1.jpg" alt="blah" className="rotate904">
          </img>
          <video autoPlay muted loop id='container3'>
            <source src="Italy.mp4" type="video/mp4"></source>
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