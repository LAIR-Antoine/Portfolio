import React, { Component } from 'react';
import './Experience.css';
import Navigation from '../Navigation/Navigation'

class Experience extends Component {

  render () {
    return (
      <div className="Experience">

        <Navigation />

        <h1>MES <span>EXPéRIENCES</span></h1>

        <div className="LineOne">
          {null}
        </div>
        <div className="ExperienceContent">
            <p className="justify">Dans le cadre de mes études à l'UTT, j'ai fait un <span className="linkcolor">stage ouvrier</span> de <span className="linkcolor">3 semaines</span> sur les mois de Janvier et Février <span className="linkcolor">2021</span> chez <span className="linkcolor">Norauto</span> dans le centre de <span className="linkcolor">Gramont</span> (Toulouse).</p>
            <p className="justify">Ce <span className="linkcolor">stage</span> m'a permis d'avoir une <span className="linkcolor">première expérience</span> dans le monde du <span className="linkcolor">travail</span>.</p>
            <p className="justify">J'ai aussi appris beaucoup de choses sur l'<span className="linkcolor">entretien</span> et la <span className="linkcolor">réparation</span> de <span className="linkcolor">voitures</span>.</p>
            <p className="See-more">Cliquez ici pour <span className="bold">
              <a href="/experience/see-more" className="see-more-link">en savoir plus</a>
              </span> ou passer à la suite !</p>
        </div>


        <a href="/creation">
          <svg className="suite-button-bottom" viewBox="0 0 180 180">
            <g id="Rectangle_1" transform="translate(86.005) rotate(45)">
              <rect x="5.93" y="-0.12" transform="matrix(2.535182e-06 1 -1 2.535182e-06 127.4374 -6.0445)" className="st3" width="121.63" height="121.63"/>
              <rect x="8.43" y="2.38" transform="matrix(2.535182e-06 1 -1 2.535182e-06 127.4374 -6.0445)" className="st4" width="116.63" height="116.63"/>
            </g>
            <line id="Ligne_5" className="st5" x1="45.58" y1="90.26" x2="136.73" y2="90.26" transform="translate(180) rotate(90)"/>
            <line id="Ligne_6" className="st5" x1="99.95" y1="129.31" x2="137.55" y2="91.72" transform="translate(180) rotate(90)"/>
            <line id="Ligne_7" className="st5" x1="99.95" y1="53.23" x2="137.55" y2="90.83" transform="translate(180) rotate(90)"/>
          </svg>
        </a>
        
      </div>

    );
  }
}

export default Experience;