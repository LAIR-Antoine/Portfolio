import React, { Component } from 'react';
import './Experience.css';
import Navigation from '../Navigation/Navigation'
import {Carousel} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


class ExperienceSeeMore extends Component {

  render () {
    return (
      <div className="Experience">

        <Navigation  />
        
        <a href="/experience">
        <h2><i className="fas fa-arrow-circle-left"></i>Retour</h2>
        </a>
        <div className="CarouselDiv">
        <Carousel>
  <Carousel.Item interval={5000}>
  <div className="CarouselText">
            <h3>Stage ouvrier</h3>
            <p>Du 24 Janvier au 13 Février 2021, j'ai effectué un stage ouvrier dans le centre Norauto de Gramont à Toulouse.</p>
            <p>Ce stage a été une très bonne expérience pour moi. Les compétences acquises au cours de ces 3 semaines me permettront d'ailleurs de pouvoir entretenir ma voiture moi-même et effectuer quelques réparations.</p>
            <br />
            <p>Pour en savoir plus sur mon stage, cliqez sur le lien ci-dessous !</p>
            <a href="https://drive.google.com/file/d/1xK3nFJf9f5LJGjOUDiuFiUfvaYxfa46L/view?usp=sharing" className="see-more-link">
                <p><i className="fas fa-file small-icon"></i>  Rapport de stage</p>
            </a>
  </div>
  </Carousel.Item>
  <Carousel.Item interval={10000}>
        <div className="CarouselText">
            <h3>MyJobGlasses</h3>
            <p>Durant mon semestre de Printemps 2021, dans le cadre d'un partenariat, je me suis inscrit sur la plateforme MyJobGlasses.</p>
            <p>En utilisant la plateforme, j'ai pu rentrer en contact avec diffrents professionnels afin d'échanger sur leur parcours et leurs expériences professionelles.</p>
            <p>Ces entretiens m'ont permis de consolider mon projet professionnel et de m'assurer que je partais bien dans une voie qui me plaît et me convient. </p>
            
            
        </div>
  </Carousel.Item>  


  {/* <Carousel.Item interval={5000}>
  <div className="CarouselText">
            <h3></h3>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
        </div>
  </Carousel.Item> */}

</Carousel></div>
      </div>

    );
  }
}

export default ExperienceSeeMore;