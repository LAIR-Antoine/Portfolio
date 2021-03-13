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
        
        <a href="/creation">
        <h2><i className="fas fa-arrow-circle-left"></i>Retour</h2>
        </a>
        <div className="CarouselDiv">
        <Carousel>
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
        </Carousel>
    </div>
    </div>

    );
  }
}

export default CreationSeeMore;