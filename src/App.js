import React, { Component } from 'react';
import User from './components/User.jsx';
import GridSection from './components/GridSection.jsx';
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
          <div
            style={{display: 'flex', flexDirection: 'row'}}
          >
          <User />
          <GridSection />
        </div>
      </div>
    );
  }
}

export default App;
