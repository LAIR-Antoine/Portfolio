import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Profile from './components/Profile/Profile'
import Competence from './components/Competence/Competence'
import Projects from './components/Projects/Projects'
import Experience from './components/Experience/Experience'
import Creation from './components/Creation/Creation'
import Contact from './components/Contact/Contact'
import ProfileSeeMore from './components/Profile/ProfileSeeMore';
import CompetenceSeeMore from './components/Competence/CompetenceSeeMore';
import ProjectsSeeMore from './components/Projects/ProjectsSeeMore';
import CreationSeeMore from './components/Creation/CreationSeeMore';
import ExperienceSeeMore from './components/Experience/ExperienceSeeMore';

const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/profile' component={Profile} />
      <Route exact path='/profile/see-more' component={ProfileSeeMore} />
      <Route exact path='/skills' component={Competence} />
      <Route exact path='/skills/see-more' component={CompetenceSeeMore} />
      <Route exact path='/projects' component={Projects} />
      <Route exact path='/projects/see-more' component={ProjectsSeeMore} />
      <Route exact path='/experience' component={Experience} />
      <Route exact path='/experience/see-more' component={ExperienceSeeMore} />
      <Route exact path='/creation' component={Creation} />
      <Route exact path='/creation/see-more' component={CreationSeeMore} />
      <Route exact path='/contact' component={Contact} />
      
   </Switch>
  </BrowserRouter>
)

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
