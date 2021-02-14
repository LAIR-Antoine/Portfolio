import React, { Component } from 'react';
import './HomeProfile.css';

class HomeProfile extends Component {

  render () {
    return (
      <div className="HomeProfile">

        <svg className="burger-menu" width="125" height="125" viewBox="0 0 180 180">
          <g id="Rectangle_1" transform="translate(86.005) rotate(45)">
            <rect x="5.93" y="-0.12" transform="matrix(2.535182e-06 1 -1 2.535182e-06 127.4374 -6.0445)" className="st0" width="121.63" height="121.63"/>
            <rect x="8.43" y="2.38" transform="matrix(2.535182e-06 1 -1 2.535182e-06 127.4374 -6.0445)" className="st1" width="116.63" height="116.63"/>
          </g>
          <line id="Ligne_1" className="st2" x1="44.56" y1="90.01" x2="135.79" y2="90.01"/>
          <line id="Ligne_2" className="st2" x1="64.33" y1="67.2" x2="117.54" y2="67.2"/>
          <line id="Ligne_3" className="st2" x1="64.33" y1="112.81" x2="117.54" y2="112.81"/>
        </svg>

        <h1>LAIR <span>Antoine</span></h1>

        <div className="LineOne">
          {null}
        </div>

        <h2>Bienvenue sur mon portfolio !</h2>

        <svg className="suite-button" width="125" height="125" viewBox="0 0 180 180">
          <g id="Rectangle_1" transform="translate(86.005) rotate(45)">
            <rect x="5.93" y="-0.12" transform="matrix(2.535182e-06 1 -1 2.535182e-06 127.4374 -6.0445)" className="st3" width="121.63" height="121.63"/>
            <rect x="8.43" y="2.38" transform="matrix(2.535182e-06 1 -1 2.535182e-06 127.4374 -6.0445)" className="st4" width="116.63" height="116.63"/>
          </g>
          <line id="Ligne_5" className="st5" x1="45.58" y1="90.26" x2="136.73" y2="90.26"/>
          <line id="Ligne_6" className="st5" x1="99.95" y1="129.31" x2="137.55" y2="91.72"/>
          <line id="Ligne_7" className="st5" x1="99.95" y1="53.23" x2="137.55" y2="90.83"/>
        </svg>

        <div className="SocialLinks">
          <a href="https://www.facebook.com/antoine.lair.3/" target="_blank" rel="noopener noreferrer" alt="Facebook"><i className="fab fa-facebook"></i></a>
          <a href="https://www.instagram.com/antoine.lair89/" target="_blank" rel="noopener noreferrer" alt="Instagram"><i className="fab fa-instagram"></i></a>
          <a href="https://github.com/LAIR-Antoine" target="_blank" rel="noopener noreferrer" alt="Github"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/lairantoine89/" target="_blank" rel="noopener noreferrer" alt="Linkedin"><i className="fab fa-linkedin"></i></a>
        </div>
        
      </div>

    );
  }
}

export default HomeProfile;