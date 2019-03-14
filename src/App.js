import React, { Component } from 'react';
import User from './components/User';
import OAuth from './components/OAuth';
import NewPet from './components/NewPet';
import Error404 from './components/Error404';
import Header from './components/Header';
import GridSection from './components/GridSection';
import Helmet from 'react-helmet';
import Homepage from './components/Homepage';
import { Switch, Route, withRouter } from 'react-router-dom';

import './App.css';

// import { BrowserRouter as Router } from 'react-router-dom';
// import Navigation from './components/Navigation';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      masterUserId: '',
      masterPetId: ''
    }
    this.handleUserIdToState = this.handleUserIdToState.bind(this);
    this.handlePetIdToState = this.handlePetIdToState.bind(this);
  }

  handleUserIdToState(userId) {
    let newUserId = userId;
    this.setState({masterUserId: newUserId});
  };

  handlePetIdToState(petId) {
    let newPetId = petId;
    this.setState({masterPetId: newPetId});
  };


  render() {

    console.log(this.state.masterUserId);
    console.log(this.state.masterPetId);
    return (
      <div className="App">
      <Helmet>
      <style>{`body { margin: 0}`}</style>
      </Helmet>
          <div
            style={{display: 'flex', flexDirection: 'row'}}
          >
          <Switch>

            <Route exact path='/' render={() =>
              <Homepage />} />
            <Route path='/error404' render={() => <Error404 />} />
            <Route path='/error404' render={() => <Error404 />} />

          </Switch>
        </div>
      </div>
    );
  }
}


export default App;
