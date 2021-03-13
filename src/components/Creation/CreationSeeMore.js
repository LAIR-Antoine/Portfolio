import React, { Component } from 'react';
import './Creation.css';
import Navigation from '../Navigation/Navigation'
import {Carousel} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


class CreationSeeMore extends Component {

  render () {
    return (
      <div className="Creation">

        <Navigation  />
        
        <a href="/skills">
        <h2><i className="fas fa-arrow-circle-left"></i>Retour</h2>
        </a>
        <div className="CarouselDiv">
        <Carousel>
  <Carousel.Item interval={10000}>
        <div className="CarouselText">
            <h3>Le développement web</h3>
            <p><i className="fab fa-js small-icon"></i>  Javascript en général</p>
            <p><i className="fab fa-react small-icon"></i>  React pour le front</p>
            <p><i className="fab fa-node small-icon"></i>  Node.js pour les API</p>
            <p><i className="fab fa-html5 small-icon"></i>  HTML depuis la terminale</p>
            <p><i className="fab fa-css3 small-icon"></i>  CSS pour le style</p>
            <p><i className="fas fa-database small-icon"></i>  MariaDB pour les bases de données</p>
            <p><i className="fab fa-bootstrap small-icon"></i>  Bootstrap pour le style de certains composants</p>
            
        </div>
  </Carousel.Item>
  <Carousel.Item interval={5000}>
  <div className="CarouselText">
            <h3>Le multimédia</h3>            
            <p><i class="fas fa-video small-icon"></i> Enregistrement de jeu ou écran sur OBS</p>
            <p><i class="fas fa-film small-icon"></i> Montage sur Adobe Premiere Pro</p>
            <p><i class="fas fa-camera small-icon"></i> Technique de base de photographie</p>
            <p><i class="fas fa-images small-icon"></i> Création graphique sur Adobe Illustrator</p>
            <p><i class="fas fa-code small-icon"></i> Maquette web sur Adobe XD ou Figma</p>
  </div>
  </Carousel.Item>  
  <Carousel.Item interval={10000}>
  <div className="CarouselText">
            <h3>Le réseau</h3>
            <p><i class="fab fa-linux small-icon"></i>  Mon ordinateur est un dual-boot Windows et Debian (Linux)</p>
            <p><i class="fas fa-globe small-icon"></i>  Gestion DNS et nom de domaine (Cloudflare, OVH...)</p>
            <p><i class="fab fa-docker small-icon"></i>  Utilisation de docker pour mettre en ligne mes projets web</p>
            <p><i class="fas fa-upload small-icon"></i>  Mise en place et administration d'un VPS avec des applications et du monitoring</p>
            <p><i class="fas fa-server small-icon"></i> Découverte et utilisation de Kubernetes et Openshift</p>
            
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
  <Carousel.Item interval={5000}>
  <div className="CarouselText">
            <h3>La programmation</h3>
            <p><i class="fab fa-github small-icon"></i> Collaboration sur certains projets et déploiement</p>
            <p><i class="fab fa-discord small-icon"></i> Création de bot Discord en Javascript</p>
            <p><i class="fas fa-terminal small-icon"></i> Ligne de commande et script en bash</p>            
            <p><i class="fas fa-code small-icon"></i> Langage C/C++ appris en cours à l'UTT</p>           
            <p><i class="fas fa-microchip small-icon"></i> Arduino (en cours ce semestre)</p>
            <p><i class="fab fa-raspberry-pi small-icon"></i> Raspberry (en cours ce semestre)</p>          
            

        </div>
  </Carousel.Item>
  {/* <Carousel.Item interval={5000}>

  <div className="CarouselText">
            <h3>Le secourisme</h3>
            <p>En février 2018, j'obtiens mon PSE1 au cours d'une formation au BNSSA.</p>
            <p>A mon arrivée à l'UTT en septembre 2019, je rejoins Sec'UTT, une association de secourisme étudiante.</p>
            <p>Je participe à plusieurs postes de secours avec eux, aussi bien sur des matchs de foot que des soirées... </p>
            <p>Je passe ensuite mon PSE2 avec eux en février 2020.</p>
        </div>
  </Carousel.Item> */}
</Carousel></div>
      </div>

    );
  }
}

export default CreationSeeMore;