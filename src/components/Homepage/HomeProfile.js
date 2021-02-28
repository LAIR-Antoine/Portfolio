import React, { Component } from 'react';
import './HomeProfile.css';
import Navigation from '../Navigation/Navigation'

class HomeProfile extends Component {

  render () {
    return (
      <div className="HomeProfile">
       
        <Navigation  />

        <h1>LAIR <span>Antoine</span></h1>

        <div className="LineOne">
          {null}
        </div>

        <h2>Bienvenue sur mon portfolio !</h2>

        <a href="/profile">
          <svg className="suite-button" viewBox="0 0 180 180">
            <g id="Rectangle_1" transform="translate(86.005) rotate(45)">
              <rect x="5.93" y="-0.12" transform="matrix(2.535182e-06 1 -1 2.535182e-06 127.4374 -6.0445)" className="st3" width="121.63" height="121.63"/>
              <rect x="8.43" y="2.38" transform="matrix(2.535182e-06 1 -1 2.535182e-06 127.4374 -6.0445)" className="st4" width="116.63" height="116.63"/>
            </g>
            <line id="Ligne_5" className="st5" x1="45.58" y1="90.26" x2="136.73" y2="90.26"/>
            <line id="Ligne_6" className="st5" x1="99.95" y1="129.31" x2="137.55" y2="91.72"/>
            <line id="Ligne_7" className="st5" x1="99.95" y1="53.23" x2="137.55" y2="90.83"/>
          </svg>
        </a>
 
        <div className="SocialLinks">
          {/* <a href="https://www.facebook.com/antoine.lair.3/" target="_blank" rel="noopener noreferrer" alt="Facebook"><i className="fab fa-facebook"></i></a>
          <a href="https://www.instagram.com/antoine.lair89/" target="_blank" rel="noopener noreferrer" alt="Instagram"><i className="fab fa-instagram"></i></a> */}
          <a className="hide-icon-links" href="mailto:lair.antoine89@orange.fr" target="_blank" rel="noopener noreferrer" alt="Email"><i class='fas fa-envelope'></i></a>
          <a className="hide-icon-links" href="https://github.com/LAIR-Antoine" target="_blank" rel="noopener noreferrer" alt="Github"><i className="fab fa-github"></i></a>
          <a className="hide-icon-links" href="https://www.linkedin.com/in/lairantoine89/" target="_blank" rel="noopener noreferrer" alt="Linkedin"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>

    );
  }
}

export default HomeProfile;