import React, { Component } from 'react';
import './Profile.css';
import Navigation from '../Navigation/Navigation'
import {Carousel} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


class ProfileSeeMore extends Component {

  render () {
    return (
      <div className="Profile">

        <Navigation  />
        
        <a href="/profile">
        <h2><i className="fas fa-arrow-circle-left"></i>Retour</h2>
        </a>
        <div className="CarouselDiv">
        <Carousel>
  <Carousel.Item interval={10000}>
        <div className="CarouselText">
            <h3>Le lycée</h3>
            <p>J'ai été au lycée Janot de Sens (89) de 2016 à 2019.</p>
            <p>Durant les deux premières années, j'ai eu l'occasion de partir deux fois en Angleterre avec la section Euro maths : une fois à Torquay et l'autre à Tunbridge.</p>
            <p>J'ai eu mon Bac S SVT spécialité Maths mention Très Bien avec section européenne anglais en 2019.</p>
        </div>
  </Carousel.Item>
  <Carousel.Item interval={10000}>
  <div className="CarouselText">
            <h3>Le développement web</h3>
            <p>En Terminale, je commence à m'intéresser au développement web suite à des vidéos du Youtubeur Micode.</p>
            <p>J'apprends d'abord le HTML/CSS que je consoliderais lors de mes deux années à l'UTT (UE MM01 notamment).</p>
            <p>En 2020, je rejoint l'UTT Netgroup, l'association d'informatique de l'UTT où je commence le Javascript.</p>
            <p>Au semestre d'Automne 2020, je réalise un site web complet avec son API et sa base de donnée.</p>
            
        </div>
  </Carousel.Item>
  <Carousel.Item interval={5000}>
  <div className="CarouselText">
            <h3>Montage et graphisme</h3>
            <p>Habitué à regarder du contenu sur YouTube et Twitch, j'ai commencé le montage et le graphisme fin 2020.</p>
            <p>En graphisme, j'ai commencé par refaire mes logos tel que mon logo Discord.</p>
            <p>En montage vidéo, j'ai commencé par des tests sur des clips du jeu Valorant avant de réaliser une vidéo pour Sens Triathlon.</p>
            <p>Lors de mon semestre de Printemps 2021, j'ai rejoins l'association Média UTT pour approfondir mes compétences de montage.</p>
        </div>
  </Carousel.Item>
  <Carousel.Item interval={5000}>
  <div className="CarouselText">
            <h3>Le réseau</h3>
            <p>En Septembre 2020, je rejoins la partie Système d'Information des Associations (SIA) de l'UNG.</p>
            <p>J'ai donc eu l'occasion de découvrir le fonctionnement d'une infrastructure avec des serveurs, des switchs...</p>
            <p>J'ai appris à utiliser Linux et Docker pour déployer mes sites internet sur un VPS ainsi que leurs base de données, API...</p>
            <p>J'ai un projet en cours sur Kubernetes.</p>
        </div>
  </Carousel.Item>
  <Carousel.Item interval={5000}>
  <div className="CarouselText">
            <h3>Le triathlon</h3>
            <p>J'ai commencé le triathlon comme athlète en 2014 à Sens Triathlon. Ma plus grosse compétition actuellement est un triathlon M en 2019 à Sens. Je termine en 3h19'10".</p>
            <p>Depuis 2017, j'aide aussi à l'encadrement des plus jeunes sur les séances du samedi.</p>
            <p>Je passe actuellement le BF5, un diplôme qui est le premier niveau d'encadrement bénévole de la FFTRI.</p>
        </div>
  </Carousel.Item>
  <Carousel.Item interval={5000}>

  <div className="CarouselText">
            <h3>Le secourisme</h3>
            <p>En février 2018, j'obtiens mon PSE1 au cours d'une formation au BNSSA.</p>
            <p>A mon arrivée à l'UTT en septembre 2019, je rejoins Sec'UTT, une association de secourisme étudiante.</p>
            <p>Je participe à plusieurs postes de secours avec eux, aussi bien sur des matchs de foot que des soirées... </p>
            <p>Je passe ensuite mon PSE2 avec eux en février 2020.</p>
        </div>
  </Carousel.Item>
</Carousel></div>
      </div>

    );
  }
}

export default ProfileSeeMore;