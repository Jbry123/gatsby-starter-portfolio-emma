import React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/Header/Header';
import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer';
import config from '../../config/SiteConfig';
import DroneImage from '../../static/logos/logo-512x512.jpg';
import Slider from '../components/Slider/Slider';



const About = () => (
  <div className="container About-container">
    <Helmet title={`Store Menu | ${config.siteTitle}`} />
    <Header>Choose A Shop!</Header>
    <Container>
      <div class='batteryDiv'>
      <h3>Batteries And Chargers</h3>
      <Slider/>
      </div>
      <div class='PropDiv'>
      <h3>Propellers And Guards</h3>
      <Slider/>
      </div>
      <div class='RTRDiv'>
      <h3>Ready To Run Kits</h3>
      <Slider/>
      </div>
    </Container>
    <Footer />
  </div>
);

export default About;
