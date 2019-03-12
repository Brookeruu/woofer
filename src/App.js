import React, { Component } from 'react';
import User from './components/User';
import OAuth from './components/OAuth';
import NewPet from './components/NewPet';
import Error404 from './components/Error404';
import GridSection from './components/GridSection';
import Helmet from 'react-helmet';
import { Switch, Route, withRouter } from 'react-router-dom';


// import { BrowserRouter as Router } from 'react-router-dom';
// import Navigation from './components/Navigation';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      masterUserId: null,
      masterPetId: null
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
    return (
      <div className="App">
      <Helmet>
      <style>{`body { margin: 0}`}</style>
      </Helmet>
          <div
            style={{display: 'flex', flexDirection: 'row'}}
          >
          <Switch>
            <Route path='/login' render={()=>
              <OAuth
                onUserIdToState={this.handleUserIdToState}
                petId={this.state.masterPetId}
              />} />

            <Route path='/' render={() =>
              [<User />,
              <GridSection />,
              <NewPet
              onPetIdToState={this.handlePetIdToState}
              userId={this.state.masterUserId}/>] } />
            <Route path='/error404' render={() => <Error404 />} />

          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
