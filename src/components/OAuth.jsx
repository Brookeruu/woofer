import React from 'react';
import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';
import Button from './styled-components/Button';
import googleG from '../images/googleG.png';

const styles = {
  margin: '100px',
  fontSize: '36px'
}



const uiConfig = {
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

function initApp() {

  let uid;

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      const displayName = user.displayName;
      const email = user.email;
      const emailVerified = user.emailVerified;
      const providerData = user.providerData;
      user.getIdToken().then(function(accessToken) {
        document.getElementById('sign-in-status').textContent = ('Signed in as ' + displayName);
        document.getElementById('sign-in').textContent = 'Sign out';
        // document.getElementById('account-details').textContent = JSON.stringify({
        //   displayName,
        //   email,
        //   uid
        // }, null, '  ');
      });
    } else {
      // User is signed out.
      document.getElementById('sign-in-status').textContent = 'Signed out';
      document.getElementById('sign-in').textContent = 'Sign in';
      document.getElementById('account-details').textContent = 'null';
    }
  }, function(error) {
    console.log(error);
  });
};

  window.addEventListener('load', function() {
    initApp()
  });

export default function OAuth() {

  return(
    <div>
      <div
      id="firebaseui-auth-container"
      style={styles}>
        <p>OAuth Component is connected!</p>
        <div id="sign-in-status"></div>
        <div id="sign-in"></div>
        <pre id="account-details"></pre>


    <Button>
    <img src={googleG} alt="google icon" style={googleIcon}></img>
    Sign in with Google</Button>

      </div>
    </div>
  )
}
