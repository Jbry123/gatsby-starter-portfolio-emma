import React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/Header/Header';
import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer';
import config from '../../config/SiteConfig';
import DroneImage from '../../static/logos/logo-512x512.jpg';
import Slider from '../components/Slider/Slider';
import BatterySlider from '../components/BatterySlider/BatterySlider';




const About = () => (
  <div className="container About-container">
    <Helmet title={`Store Menu | ${config.siteTitle}`} />
    <Header>Choose A Shop!</Header>
    <Container>
      <div class='batteryDiv'>
        <p>
        </p>
        <h3 style={{textAlign:"center", color:"#5BC0BE"}}>
          <a href="/contact">
            Batteries/Chargers
          </a>
        </h3>
        <BatterySlider />
      </div>
      <div class='batteryDiv'>
        <p>
        </p>
        <h3 style={{textAlign:"center", color:"#5BC0BE"}}>
          <a href="/contact">
            Propellers/Guards
          </a>
        </h3>
        <BatterySlider />
      </div>
      <div class='batteryDiv'>
        <p>
        </p>
        <h3 style={{textAlign:"center", color:"red"}}>
          <a href="/contact">
          Ready To Run Kits
          </a>
        </h3>
        <BatterySlider />
      </div>    </Container>
    <Footer />
  </div>
);

export default About;
