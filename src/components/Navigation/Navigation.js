import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {



  render () {
    return (
      <div className="Navigation">
        <input type="checkbox" id="op"></input>
        <div className="lower">
          <label htmlFor="op">
          <svg className="burger-menu" width="125" height="125" viewBox="0 0 180 180">
          <g id="Rectangle_1" transform="translate(86.005) rotate(45)">
            <rect x="5.93" y="-0.12" transform="matrix(2.535182e-06 1 -1 2.535182e-06 127.4374 -6.0445)" className="st0" width="121.63" height="121.63"/>
            <rect x="8.43" y="2.38" transform="matrix(2.535182e-06 1 -1 2.535182e-06 127.4374 -6.0445)" className="st1" width="116.63" height="116.63"/>
          </g>
          <line id="Ligne_1" className="st2" x1="44.56" y1="90.01" x2="135.79" y2="90.01"/>
          <line id="Ligne_2" className="st2" x1="64.33" y1="67.2" x2="117.54" y2="67.2"/>
          <line id="Ligne_3" className="st2" x1="64.33" y1="112.81" x2="117.54" y2="112.81"/>
        </svg>
          </label>
        </div>
        <div className="overlay overlay-hugeinc">
              <label htmlFor="op">
              <svg className="burger-menu" width="125" height="125" viewBox="0 0 180 180">
          <g id="Rectangle_1" transform="translate(86.005) rotate(45)">
            <rect x="5.93" y="-0.12" transform="matrix(2.535182e-06 1 -1 2.535182e-06 127.4374 -6.0445)" className="st01" width="121.63" height="121.63"/>
            <rect x="8.43" y="2.38" transform="matrix(2.535182e-06 1 -1 2.535182e-06 127.4374 -6.0445)" className="st11" width="116.63" height="116.63"/>
          </g>
          <line id="Ligne_1" className="st21" x1="44.56" y1="90.01" x2="135.79" y2="90.01"/>
          <line id="Ligne_2" className="st21" x1="64.33" y1="67.2" x2="117.54" y2="67.2"/>
          <line id="Ligne_3" className="st21" x1="64.33" y1="112.81" x2="117.54" y2="112.81"/>
        </svg>
              </label>
              <nav>
                <ul>
                  <li><a href="/profile">Mon <span className="span-menu">profil</span></a></li>
                  <li><a href="/skills">Mes <span className="span-menu">compétences</span></a></li>
                  <li><a href="/projects">Mes <span className="span-menu">projets</span></a></li>
                  <li><a href="/experience">Mes <span className="span-menu">expériences</span></a></li>
                  <li><a href="/creation">Mes <span className="span-menu">créations</span></a></li>
                  {/* <li><a href="/">Mon <span className="span-menu">cv</span></a></li> */}
                  <li><a href="/contact">Me <span className="span-menu">contacter</span></a></li>
                  <li><a href="/galerie">Mes <span className="span-menu">photos</span></a></li>
                  <li>
                    <a className="icon-links" href="/"><i className="fas fa-home"></i></a>
                    <a className="icon-links" href="mailto:lair.antoine89@orange.fr" target="_blank" rel="noopener noreferrer" alt="Email"><i className='fas fa-envelope'></i></a>
                    <a className="icon-links" href="https://github.com/LAIR-Antoine" target="_blank" rel="noopener noreferrer" alt="Github"><i className="fab fa-github"></i></a>
                    <a className="icon-links" href="https://www.linkedin.com/in/lairantoine89/" target="_blank" rel="noopener noreferrer" alt="Linkedin"><i className="fab fa-linkedin"></i></a>
                  </li>

                </ul>
              </nav>
        </div>
      </div>

    );
  }
}

export default Navigation;