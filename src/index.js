import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Profile from './components/Profile/Profile'
import Projects from './components/Projects/Projects'
import Experience from './components/Experience/Experience'
import Creation from './components/Creation/Creation'

const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/profile' component={Profile} />
      <Route exact path='/projects' component={Projects} />
      <Route exact path='/experience' component={Experience} />
      <Route exact path='/creation' component={Creation} />
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
