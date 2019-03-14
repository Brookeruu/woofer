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


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      masterUserId: '',
      masterPetId: '',
      masterPetList: {}
    }
    this.handleUserIdToState = this.handleUserIdToState.bind(this);
    this.handlePetIdToState = this.handlePetIdToState.bind(this);
    this.handlePetListToState = this.handlePetListToState.bind(this);
  }

  handleUserIdToState(userId) {
    let newUserId = userId;
    this.setState({masterUserId: newUserId});
  };

  handlePetIdToState(petId) {
    let newPetId = petId;
    this.setState({masterPetId: newPetId});
  };

  handlePetListToState(petList) {
    let newPetList = petList;
    this.setState({masterPetList: newPetList});
  }

  render() {

    console.log("master user ID", this.state.masterUserId);
    console.log("masterPetList",this.state.masterPetId);
    console.log("master List", this.state.masterPetList);
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
              <Homepage
                onPetListToState={this.handlePetListToState}
                onUserIdToState={this.handleUserIdToState}
                onPetIdToState={this.handlePetIdToState}
                userId={this.state.masterUserId}
                // petId={this.state.masterPetId}
                petList={this.state.masterPetList}
              />} />

            <Route path='/error404' render={() => <Error404 />} />

          </Switch>
        </div>
      </div>
    );
  }
}


export default App;
