import React, { Component } from 'react';
import './Galerie.css';
import Navigation from '../Navigation/Navigation'
import Avion1 from '../../images/avion1.jpg'
/* import Avion2 from '../../images/avion2.jpg' */
import Avion3 from '../../images/avion3.jpg'
/* import Faisan from '../../images/faisan.jpg' */
import Fleur from '../../images/fleur.jpg'
import Parapluie from '../../images/parapluie.jpg'
import Carcas1 from '../../images/carcas1.jpg'
import Toulouse1 from '../../images/toulouse1.jpg'
import Toulouse2 from '../../images/toulouse2.jpg'
import Toulouse3 from '../../images/toulouse3.jpg'
import Toulouse4 from '../../images/toulouse4.jpg'
import { Row, Col } from 'react-bootstrap'

class Galerie extends Component {

  render () {
    return (
      <div className="Galerie">
       
        <Navigation  />

        <h1>MA <span>Galerie</span></h1>

        <div className="LineOne">
          {null}
        </div>

        <div className="GalerieContent">  
            <Row>
                <Col className="marginTopPhone" xs={12} md={4} lg={4}>
                    <img src={ Avion1 } alt='avion1' />
                </Col>
                <Col className="marginTopPhone" xs={12} md={4} lg={4}>
                <img src={ Toulouse4 } alt='toulouse4' />
                </Col>
                <Col className="marginTopPhone" xs={12} md={4} lg={4}>
                    <img src={ Avion3 } alt='avion3' />
                </Col>
            </Row>
            {/* <Row className="marginTop">
                <Col xs={12} md={1} lg={1}>
                    {null}
                </Col>
                <Col className="marginTopPhone" xs={12} md={4} lg={4}>
                    <img src={ Faisan } alt='faisan' />
                </Col>
                <Col xs={12} md={2} lg={2}>
                    {null}
                </Col>
                <Col className="marginTopPhone" xs={12} md={4} lg={4}>
                    <img src={ Fleur } alt='fleur' />
                </Col>
                <Col xs={12} md={1} lg={1}>
                    {null}
                </Col>
            </Row> */}
            <Row>
                <Col className="marginTopPhone" xs={12} md={4} lg={4}>
                    <img src={ Parapluie } alt='parapluie' />
                </Col>
                <Col className="marginTopPhone" xs={12} md={4} lg={4}>
                    <img src={ Carcas1 } alt='carcas1' />
                </Col>
                <Col className="marginTopPhone" xs={12} md={4} lg={4}>
                    <img src={ Fleur } alt='fleur' />
                </Col>
            </Row>
            <Row>
                <Col className="marginTopPhone" xs={12} md={4} lg={4}>
                    <img src={ Toulouse1 } alt='toulouse1' />
                </Col>
                <Col className="marginTopPhone" xs={12} md={4} lg={4}>
                <img src={ Toulouse2 } alt='toulouse2' />
                </Col>
                <Col className="marginTopPhone" xs={12} md={4} lg={4}>
                <img src={ Toulouse3 } alt='toulouse3' />
                </Col>
            </Row>

        </div>
        



        
      </div>

    );
  }
}

export default Galerie;