import React, { Component } from 'react';
import './Creation.css';
import Navigation from '../Navigation/Navigation'

class Creation extends Component {

  render () {
    return (
      <div className="Creation">

        <Navigation />

        <h1>MES <span>CRéATIONS</span></h1>

        <div className="LineOne">
          {null}
        </div>
        <div className="CreationContent">
            <p className="justify">Depuis mon enfance, j'ai fait pas mal de <span className="linkcolor">photos.</span> J'aime beaucoup les <span className="linkcolor">filets</span> sur les <span className="linkcolor">courses automobiles</span> mais aussi les <span className="linkcolor">paysages</span> et l'<span className="linkcolor">animalier</span>. {/* Vous les retrouverez dans la <span className="linkcolor">galerie</span>. */}</p>
            <p className="justify">Début 2021, j'ai réalisé un <span className="linkcolor">montage vidéo</span> pour mon <span className="linkcolor">club de triathlon</span> pour un concours de la ville de <span className="linkcolor">Sens</span> sur le <span className="linkcolor">tri sélectif</span>. La vidéo est accessible <a href="https://youtu.be/k8nRW6KGtuY" target="_blank" rel="noreferrer" className="linkcolor">ici</a>.</p>
            <p className="justify">Je fais aussi mes débuts dans le <span className="linkcolor">graphisme</span>{/*  et mes <span className="linkcolor">créations</span> sont visibles <span className="linkcolor">ici</span> */}.</p>
            <p className="See-more">Cliquez ici pour <span className="bold">
              <a href="/creation/see-more" className="see-more-link">en savoir plus</a>
              </span>. <br /> Merci de votre visite !</p>
        </div>

        <div className="SocialLinks">
          <a href="mailto:lair.antoine89@orange.fr" target="_blank" rel="noopener noreferrer" alt="Email"><i className='fas fa-envelope'></i></a>
          <a href="https://github.com/LAIR-Antoine" target="_blank" rel="noopener noreferrer" alt="Github"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/lairantoine89/" target="_blank" rel="noopener noreferrer" alt="Linkedin"><i className="fab fa-linkedin"></i></a>
        </div>        
      </div>

    );
  }
}

export default Creation;