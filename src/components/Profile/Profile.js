import React, { Component } from 'react';
import './Profile.css';
import Navigation from '../Navigation/Navigation'

class Profile extends Component {

  render () {
    return (
      <div className="Profile">

        <Navigation  />

        <h1>MON <span>PROFIL</span></h1>

        <div className="LineOne">
          {null}
        </div>
        <div className="ProfileContent">
            <p className="justify">Bonjour à tous !<br /> Je suis Antoine LAIR, 20 ans et <span className="linkcolor">étudiant</span> en <span className="linkcolor">BUT MMI</span> à Troyes.</p>
            <p className="justify">Depuis ma terminale, je fais du <span className="linkcolor">développement web</span>. En 2020, j'ai commencé à me diversifier en découvrant le <span className="linkcolor">graphisme</span>, le <span className="linkcolor">montage vidéo</span> et le <span className="linkcolor">réseau</span>.</p>
            <p className="justify">J'aime bien prendre des <span className="linkcolor">photos</span> quand j'ai du temps libre.</p>
            <p className="justify">Je fais du <span className="linkcolor">triathlon</span> depuis 8 ans et je participe à des <span className="linkcolor">postes de secours</span> depuis 1 an.</p>
            <p className="See-more">Cliquez ici pour <span className="bold">
              <a href="/profile/see-more" className="see-more-link">en savoir plus</a>
              </span> ou passer à la suite !</p>
        </div>


        <a href="/skills">
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

export default Profile;