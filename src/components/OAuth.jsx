import React from 'react';
import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';
import Button from './styled-components/Button';
import googleG from '../images/googleG.png';
import PropTypes from 'prop-types';
import NewPet from './NewPet'

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

let userInfoDisplay = {
  position: 'fixed',
  marginTop: '-60px',
  right: '50px',
  color: 'black',
  textTransform: 'uppercase',
  fontSize: '30px',
  letterSpacing: '1px'

}

const buttonHidden = {
  display: 'none'
}

const hideUserInfo = {
  display: 'none'
}

const showUserInfo = {
  display: 'block'
}

class OAuth extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user: '',
      userName: 'Please sign in',
      userId: 'n/a',
      signedIn: false,
      pets: []
    }
    this.hanldeSignIn = this.handleSignIn.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({user: user});
        this.setState({userName: user.displayName});
        this.setState({userId: user.uid});
        this.setState({signedIn: true});
        this.sendUserId();
        this.getPets();
      }
    });
  }

  handleSignIn() {
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      let token = result.credential.accessToken;
      // The signed-in user info.
      let user = result.user;
    }).catch(function(error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      let email = error.email;
      let credential = error.credential;
    });
  }

  handleSignOut() {
    firebase.auth().signOut().then(() => {
      this.setState({userName: ''});
      this.setState({userId: ''});
      this.setState({signedIn: false});
    });
  };

  sendUserId() {
    let userId = this.state.user.uid
    this.props.onUserIdToState(userId);
  }

  getPets() {
    let newPetState;
    let userPets = firebase.database().ref('pets/' + this.state.userId);
    userPets.on('value', (snap) => {
      newPetState = Object.assign({}, snap.val());
      this.setState({pets: newPetState});
      console.log(this.state.pets);
      console.log(this.props.userPropId)
      console.log(this.props);
    }, function(errorObject) {
      console.log('The read failed:' + errorObject.code);
    });

  }

  render() {

    return(
      <div style={styles}>
      <style>{`
        .signOut-toggle {
          color: black;
        }
        .signOut-toggle:hover {
          text-decoration: underline;
        }
      `}
      </style>
        <Button
          style={{
            position: 'fixed',
            top: '-20px',
            right: '10px'

          }}
          onClick={this.handleSignIn}
        >
        <img style={googleIcon} src={googleG} alt="Google Icon"></img>
        Sign In with Google
        </Button>

        <div style={userInfoDisplay}>

          <p id="signIn">Hi,   {this.state.userName}
          <span
          className={"signOut-toggle"}
          style={{marginLeft: '90px'}}
           onClick={this.handleSignOut}>Sign Out</span></p>
        </div>

      </div>
    );
  }
}

OAuth.propTypes = {
  petId: PropTypes.string,
  userPropId: PropTypes.string,
  onUserIdToState: PropTypes.func
}

export default OAuth;

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
