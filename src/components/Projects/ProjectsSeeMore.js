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
            <a href="https://sens-triathlon.com" className="see-more-link">
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
            <a href="https://eve.lairantoine.fr" className="see-more-link">
                <p><i className="fas fa-globe small-icon"></i>  Site internet</p>
            </a>
            <a href="https://apieve.lairantoine.fr/api/events/?valid=1" className="see-more-link">
                <p><i className="fas fa-sitemap small-icon"></i>  API contenant des données tests</p>
            </a>
            <a href="https://drive.google.com/file/d/1ccjRm38Cdpn4t6D4lmc7W_sJOumuTMsA/view?usp=sharing" className="see-more-link">
                <p><i className="fas fa-file small-icon"></i>  Rapport du projet</p>
            </a>
            
        </div>
  </Carousel.Item>  
  <Carousel.Item interval={10000}>
  <div className="CarouselText">
            <h3>Montage pour Sens Triathlon</h3>
            <p>Dans le cadre d'un concours sur le thème du recyclage à Sens, j'ai réalisé le montage vidéo pour le club de Sens Triathlon à partir d'une vidéo filmés au téléphone.</p>
            <p>J'ai monté la vidéo sur Adobe Première Pro, c'était ma première utilisation du logiciel pour une vidéo complète.</p>
            <br />
            <p>Le projet est accessible sur ce lien :</p>
            <a href="https://youtu.be/k8nRW6KGtuY" className="see-more-link">
                <p><i className="fab fa-youtube small-icon"></i>  Vidéo YouTube</p>
            </a>
            <a href="https://www.ville-sens.fr/concours-video/35/" className="see-more-link">
                <p><i className="fas fa-globe small-icon"></i>  Lien du concours (jusqu'au 1er avril)</p>
            </a>
        </div>
  </Carousel.Item>

  <Carousel.Item interval={5000}>
  <div className="CarouselText">
            <h3>Apprentissage du montage</h3>   
            <p>Durant mon dernier semestre à l'UTT en Printemps 2021, j'ai rejoins l'association Média UTT.</p>
            <p>Ce montage a été réalisé suite à une de leur formation sur le logiciel Adobe Première Pro. Les ressources vidéos étaient fourni, le but était de faire le meilleur montage possible avec ces paysages.</p>
            <br />    
            <p>Le projet est accessible sur ce lien :</p>
            <a href="https://youtu.be/bwBom0uBYrE" className="see-more-link">
                <p><i className="fab fa-youtube small-icon"></i>  Vidéo YouTube</p>
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