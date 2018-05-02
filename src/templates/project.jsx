import React from 'react';
import Helmet from 'react-helmet';
import { Fade } from 'react-reveal';
import Palette from 'react-palette';
import config from '../../config/SiteConfig';
import SEO from '../components/SEO/SEO';
import Footer from '../components/Footer/Footer';
import Container from '../components/Container/Container';
import styles from './project.module.scss';
import Img from 'gatsby-image';
import DroneImage from '../../static/logos/logo-48.jpg';

const Project = props => {
  return (
    <div>
    <img classId='Drone logo'src= {DroneImage} />
      <h2>DroneSupplyUSA</h2>
    </div>
  );
};

export default Project;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query ProjectPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD.MM.YYYY")
        client
        service
        cover {
          childImageSharp {
            resize(width: 800) {
              src
            }
          }
        }
      }
      fields {
        slug
      }
      excerpt
    }
  }
`;
