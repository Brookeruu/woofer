import React, { Component } from 'react';
import User from './components/User';
import OAuth from './components/OAuth';
import Error404 from './components/Error404';
import GridSection from './components/GridSection';
import Helmet from 'react-helmet';
import { Switch, Route, withRouter } from 'react-router-dom';


// import { BrowserRouter as Router } from 'react-router-dom';
// import Navigation from './components/Navigation';
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
          <Switch>
            <Route path='/login' render={()=> <OAuth />} />
            <Route path='/user' render={() => [<User />, <GridSection />] } />
            <Route path='/error404' render={() => <Error404 />} />

          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
