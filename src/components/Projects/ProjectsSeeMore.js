import React, { Component } from 'react';
import './Projects.css';
import Navigation from '../Navigation/Navigation'
import {Carousel} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


class ProjectsSeeMore extends Component {

  render () {
    return (
      <div className="Projects">

        <Navigation  />
        
        <a href="/projects">
        <h2><i className="fas fa-arrow-circle-left"></i>Retour</h2>
        </a>
        <div className="CarouselDiv">
        <Carousel>
  <Carousel.Item interval={5000}>
  <div className="CarouselText">
            <h3>Site de Sens Triathlon</h3>
            <p>En Octobre 2020, je me suis lancé dans la refonte du site de mon club de triathlon.</p>
            <p>Je continue toujours à maintenir le site à jour depuis et prévoit de le faire évoluer encore.</p>
            <br />            
            <p><i className="fab fa-js small-icon"></i>  Majoritairement du Javascript</p>
            <p><i className="fab fa-react small-icon"></i>  Un site en React</p>
            <p><i className="fas fa-code small-icon"></i>  Réalisé entièrement seul</p>
            <br />
            <p>Le projet est accessible sur ce lien :</p>
            <a href="https://sens-triathlon.com" target="_blank" rel="noreferrer" className="see-more-link">
                <p><i className="fas fa-globe small-icon"></i>  Site internet</p>
            </a>
  </div>
  </Carousel.Item>
  <Carousel.Item interval={10000}>
        <div className="CarouselText">
            <h3>L'événement sportif</h3>
            <p>Projet étudiant au cours de mon semestre d'Automne 2020</p>
            <p><i className="fab fa-react small-icon"></i>  Un site en React</p>
            <p><i className="fab fa-node small-icon"></i>  Une API en Node.js </p>
            <p><i className="fas fa-database small-icon"></i>  Une base de données en MariaDB</p>
            <br />
            <p>Le projet est accessible sur ces liens :</p>
            <a href="https://eve.lairantoine.fr" target="_blank" rel="noreferrer" className="see-more-link">
                <p><i className="fas fa-globe small-icon"></i>  Site internet</p>
            </a>
            <a href="https://apieve.lairantoine.fr/api/events/?valid=1" target="_blank" rel="noreferrer" className="see-more-link">
                <p><i className="fas fa-sitemap small-icon"></i>  API contenant des données tests</p>
            </a>
            <a href="https://drive.google.com/file/d/1ccjRm38Cdpn4t6D4lmc7W_sJOumuTMsA/view?usp=sharing" target="_blank" rel="noreferrer" className="see-more-link">
                <p><i className="fas fa-file small-icon"></i>  Rapport du projet</p>
            </a>
            
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

export default ProjectsSeeMore;