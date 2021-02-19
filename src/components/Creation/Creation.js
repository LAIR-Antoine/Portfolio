import React, { Component } from 'react';
import './Creation.css';

class Creation extends Component {

  render () {
    return (
      <div className="Creation">

        <svg className="burger-menu" width="125" height="125" viewBox="0 0 180 180">
          <g id="Rectangle_1" transform="translate(86.005) rotate(45)">
            <rect x="5.93" y="-0.12" transform="matrix(2.535182e-06 1 -1 2.535182e-06 127.4374 -6.0445)" className="st0" width="121.63" height="121.63"/>
            <rect x="8.43" y="2.38" transform="matrix(2.535182e-06 1 -1 2.535182e-06 127.4374 -6.0445)" className="st1" width="116.63" height="116.63"/>
          </g>
          <line id="Ligne_1" className="st2" x1="44.56" y1="90.01" x2="135.79" y2="90.01"/>
          <line id="Ligne_2" className="st2" x1="64.33" y1="67.2" x2="117.54" y2="67.2"/>
          <line id="Ligne_3" className="st2" x1="64.33" y1="112.81" x2="117.54" y2="112.81"/>
        </svg>

        <h1>MES <span>CRéATIONS</span></h1>

        <div className="LineOne">
          {null}
        </div>
        <div className="CreationContent">
            <p className="justify">Depuis mon enfance, j'ai fait pas mal de <span className="linkcolor">photos.</span> J'aime beaucoup les <span className="linkcolor">filets</span> sur les <span className="linkcolor">courses automobiles</span> mais aussi les <span className="linkcolor">paysages</span> et l'<span className="linkcolor">animalier</span>. Vous les retrouverez dans la <span className="linkcolor">galerie</span>.</p>
            <p className="justify">Début 2021, j'ai réalisé un <span className="linkcolor">montage vidéo</span> pour mon <span className="linkcolor">club de triathlon</span> pour un concours de la ville de <span className="linkcolor">Sens</span> sur le <span className="linkcolor">tri sélectif</span>. La vidéo est accessible <span className="linkcolor">ici</span>.</p>
            <p className="justify">Je fais aussi mes débuts dans le <span className="linkcolor">graphisme</span> et mes <span className="linkcolor">créations</span> sont visibles <span className="linkcolor">ici</span>.</p>
            <p className="See-more">Cliquez ici pour <span className="bold">en savoir plus</span>. <br /> Merci de votre visite !</p>
        </div>

        <div className="SocialLinks">
          {/* <a href="https://www.facebook.com/antoine.lair.3/" target="_blank" rel="noopener noreferrer" alt="Facebook"><i className="fab fa-facebook"></i></a>
          <a href="https://www.instagram.com/antoine.lair89/" target="_blank" rel="noopener noreferrer" alt="Instagram"><i className="fab fa-instagram"></i></a> */}
          <a href="https://github.com/LAIR-Antoine" target="_blank" rel="noopener noreferrer" alt="Github"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/lairantoine89/" target="_blank" rel="noopener noreferrer" alt="Linkedin"><i className="fab fa-linkedin"></i></a>
        </div>        
      </div>

    );
  }
}

export default Creation;