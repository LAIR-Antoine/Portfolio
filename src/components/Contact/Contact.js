import React, { Component } from 'react';
import './Contact.css';
import Navigation from '../Navigation/Navigation'

class Contact extends Component {
  constructor() {
    super();
    this.state = { 
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        message: ''
    };
}
handleChange = (event) => {
  this.setState({[event.target.name]: event.target.value});
}

handleSubmit = (event) => {
  console.log(JSON.stringify(this.state));
  
  fetch('https://api.lairantoine.fr/api/contact/', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      // We convert the React state to JSON and send it as the POST body
      body: JSON.stringify(this.state)
    })
    .then(function(res) {
      console.log(res)
      document.location.href = '/'
      return res.json();
      
    });

  event.preventDefault();
}

  render () {
    return (
      <div className="Contact">

        <Navigation />

        <h1>ME <span>CONTACTER</span></h1>

        <div className="LineOne">
          {null}
        </div>
        <div className="ContactContent">
            
        <div className="row">
                  <div className="col-lg-12">
                       <form className="contact-form" onSubmit={this.handleSubmit}>
                           <div className="row">
                               <div className="col-md-6">
                                   <label htmlFor="firstname">Prénom {/* <span className="yellow">*</span> */}</label>
                                   <input id="firstname" type="text" value={this.state.value} onChange={this.handleChange} name="firstname" className="form-control" placeholder="Votre prénom" required />
                                   <p className="comments"></p>
                               </div>
                               <div className="col-md-6">
                                   <label htmlFor="name">Nom {/* <span className="yellow">*</span> */}</label>
                                   <input id="name" type="text" value={this.state.value} onChange={this.handleChange} name="lastname" className="form-control" placeholder="Votre nom" required />
                                   <p className="comments"></p>
                               </div>
                               <div className="col-md-6">
                                   <label htmlFor="email">Email {/* <span className="yellow">*</span> */}</label>
                                   <input id="email" type="email" value={this.state.value} onChange={this.handleChange} name="email" className="form-control" placeholder="Votre email" required />
                                   <p className="comments"></p>
                               </div>
                               <div className="col-md-6">
                                   <label htmlFor="phone">Téléphone</label>
                                   <input id="phone" type="tel" value={this.state.value} onChange={this.handleChange} name="phone" className="form-control" placeholder="Votre téléphone" />
                                   <p className="comments"></p>
                               </div>
                               <div className="col-md-12">
                                   <label htmlFor="message">Message {/* <span className="yellow">*</span> */}</label>
                                   <textarea id="message" value={this.state.value} onChange={this.handleChange} name="message" className="form-control" placeholder="Votre message" rows="5" required ></textarea>
                               </div>
                               <div className="col-md-12 button-form-div">
                                   <input type="submit" className="button" value="Envoyer" />
                               </div>
                               
                           </div>
                       </form>
                   </div>
              </div>







        </div>
        
      </div>

    );
  }
}

export default Contact;