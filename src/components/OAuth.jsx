import React from 'react';
import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';
import Button from './styled-components/Button';
import googleG from '../images/googleG.png';
import PropTypes from 'prop-types';

const gapi = window.gapi;

const styles = {
  margin: '100px',
  fontSize: '36px'
}

const uiConfig = {
  callbacks: {
  signInSuccessWithAuthResult: function(authResult, redirectUrl) {
    // User successfully signed in.
    // Return type determines whether we continue the redirect automatically
    // or whether we leave that to developer to handle.
    return true;
  },

  uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById('loader').style.display = 'none';
    }
  },
  signInSuccessUrl: '<http://localhost:3000/user>',
  signInOptions: [
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      scopes: [
        'https://www.googleapis.com/auth/calendar.events'
      ]
    }
  ]
};

// Initialize the FirebaseUI Widget using Firebase.
const ui = new firebaseui.auth.AuthUI(firebase.auth());

// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);

const googleIcon = {
  maxHeight: '30px',
  marginTop: '5px',
  marginRight: '25px'
}

//   window.addEventListener('load', function() {
//     initApp()
//   });

export default class OAuth extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      userName: '',
      userId: ''
      }
      this.handleUserSignedIn = this.handleUserSignedIn.bind(this);
      this.initApp = this.initApp.bind(this);

  }

  componentDidMount(){
      this.initApp()
  }

  initApp() {

    let uid;
    console.log(this.state);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        const displayName = user.displayName;
        const email = user.email;
        const userId = user.uid;
        this.handleUserSignedIn(user);
        user.getIdToken().then(function(accessToken) {
          document.getElementById('sign-in-status').textContent = ('Signed in as ' + displayName + " " + userId);
          document.getElementById('sign-out').textContent = 'Sign out';

        });
      } else {
        // User is signed out.
        document.getElementById('sign-in-status').textContent = 'Signed out';
        document.getElementById('sign-in').textContent = 'Sign in';
        document.getElementById('account-details').textContent = '';
      }
    }, function(error) {
      console.log(error);
    });
  };

  componentDidUpdate() {
  }

  handleUserSignedIn(user) {
    if (user) {
      this.setState({userName: user.displayName});
      this.setState({signedIn: true});
      this.setState({userId: user.uid});      // console.log(displayName);
      console.log(this.state);
    } else {
      this.setState({signedIn: false})
    }
  }

  handleSignOut() {
    firebase.auth().signOut();
  }

  render(){

    return(
      <div>
        <div
        id='firebaseui-auth-container'
        style={styles}>

          <p>OAuth Component is connected!</p>
          <div id="loader">Loading...</div>
          <div id='sign-in-status'></div>
          <div id='sign-in'></div>
          <div id='sign-out' onClick={ this.handleSignout }></div>
          <pre id='account-details'></pre>

        </div>
      </div>
    )
  }
}
