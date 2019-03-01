import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
import User from './components/User.jsx';
import Helmet from 'react-helmet';
import logo from './logo.svg';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Helmet>
      <style>{`body { margin: 0}`}</style>
      </Helmet>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <User />
        </header>
      </div>
    );
  }
}

export default App;
