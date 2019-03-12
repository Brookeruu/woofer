import React from 'react';
import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';
import Button from './styled-components/Button';
import googleG from '../images/googleG.png';
import PropTypes from 'prop-types';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const gapi = window.gapi;

const styles = {
  margin: '100px',
  fontSize: '36px'
}

const googleIcon = {
  maxHeight: '30px',
  marginTop: '5px',
  marginRight: '25px'
}

const provider = new firebase.auth.GoogleAuthProvider();

provider.addScope('https://www.googleapis.com/auth/calendar.events');

let signInButtonDisplay;
let userInfoDisplay;

const buttonHidden = {
  display: 'none'
}

const hideUserInfo = {
  display: 'none'
}

const showUserInfo = {
  display: 'block'
}

export default class OAuth extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userName: 'Please sign in',
      userID: 'n/a',
      signedIn: false
    }
    this.hanldeSignIn = this.handleSignIn.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({userName: user.displayName});
        this.setState({userId: user.uid});
        this.setState({signedIn: true});
      }
    });
  }

  handleSignIn() {
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      let token = result.credential.accessToken;
      // The signed-in user info.
      let user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      // The email of the user's account used.
      let email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      let credential = error.credential;
      // ...
    });
  }

  handleSignOut() {
    firebase.auth().signOut().then(() => {
      this.setState({userName: ''});
      this.setState({userId: ''});
      this.setState({signedIn: false});
    });
  };

  handleDisplay() {
    // if (signInButtonDisplay !== buttonHidden ) {
      signInButtonDisplay = buttonHidden;
    // };
  };

  render() {
    return(
      <div>
        <Button
          style={signInButtonDisplay}
          onClick={this.handleSignIn}
        >
        <img style={googleIcon} src={googleG} alt="Google Icon"></img>
        Sign In with Google
        </Button>
        <div style={{userInfoDisplay}}>
          <p>oAuth2 is connected!</p>
          <p id="signIn">User Name: {this.state.userName}</p>
          <p>User Id : {this.state.userId}</p>
          <Button onClick={this.handleSignOut}>Sign Out</Button>
        </div>
      </div>
    )
  }
}




// const uiConfig = {
//   callbacks: {
//   signInSuccessWithAuthResult: function(authResult, redirectUrl) {
//     // User successfully signed in.
//     // Return type determines whether we continue the redirect automatically
//     // or whether we leave that to developer to handle.
//     return true;
//   },
//
//   uiShown: function() {
//       // The widget is rendered.
//       // Hide the loader.
//       document.getElementById('loader').style.display = 'none';
//     }
//   },
//   signInSuccessUrl: '/login',
//   signInOptions: [
//     {
//       provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//       scopes: [
//         'https://www.googleapis.com/auth/calendar.events'
//       ]
//     }
//   ]
// };
//
// // Initialize the FirebaseUI Widget using Firebase.
// const ui = new firebaseui.auth.AuthUI(firebase.auth());
//
// // The start method will wait until the DOM is loaded.
// ui.start('#firebaseui-auth-container', uiConfig);
//
// const googleIcon = {
//   maxHeight: '30px',
//   marginTop: '5px',
//   marginRight: '25px'
// }
//
// //   window.addEventListener('load', function() {
// //     initApp()
// //   });
//
// export default class OAuth extends React.Component{
//
//   constructor(props) {
//     super(props);
//     this.state = {
//       signedIn: false,
//       userName: '',
//       userId: ''
//       }
//       this.handleUserSignedIn = this.handleUserSignedIn.bind(this);
//       this.initApp = this.initApp.bind(this);
//   }
//
//
//   componentDidMount(){
//       this.initApp();
//   }
//
//   initApp() {
//
//     let uid;
//     console.log(this.state);
//     firebase.auth().onAuthStateChanged((user) => {
//       if (user) {
//         // User is signed in.
//         const displayName = user.displayName;
//         const email = user.email;
//         const userId = user.uid;
//         this.handleUserSignedIn(user);
//         user.getIdToken().then(function(accessToken) {
//           document.getElementById('sign-in-status').textContent = ('Signed in as ' + displayName + " " + userId);
//           document.getElementById('sign-out').textContent = 'Sign out';
//
//         });
//       } else {
//         // User is signed out.
//         document.getElementById('sign-in-status').textContent = 'Signed out';
//         document.getElementById('sign-in').textContent = 'Sign in';
//         document.getElementById('account-details').textContent = '';
//       }
//     }, function(error) {
//       console.log(error);
//     });
//
//   };
//
//   // componentDidUpdate() {
//   //   this.ui.start('#firebaseui-auth-container', uiConfig);
//   //
//   // }
//
//   handleUserSignedIn(user) {
//     if (user) {
//       this.setState({userName: user.displayName});
//       this.setState({signedIn: true});
//       this.setState({userId: user.uid});      // console.log(displayName);
//       console.log(this.state);
//     } else {
//       this.setState({signedIn: false})
//     }
//   }
//
//   handleSignOut() {
//     firebase.auth().signOut();
//   }
//
//   render(){
//
//     return(
//       <div>
//       <div id='firebaseui-auth-container'>
//         <div
//         style={styles}>
//
//           <p>OAuth Component is connected!</p>
//           <div id='loader'>Loading...</div>
//           <div id='sign-in-status'></div>
//           <div id='sign-in'></div>
//           <div id='sign-out' onClick={ this.handleSignout }></div>
//           <pre id='account-details'></pre>
// </div>
//         </div>
//       </div>
//     )
//   }
// }
