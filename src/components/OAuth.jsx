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

let userInfoDisplay = {
  position: 'fixed',
  marginTop: '-32px',
  right: '50px',
  color: 'black',
  textTransform: 'uppercase',
  fontSize: '30px',
  letterSpacing: '1px'
}

let hideButton;
let show;
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
      pets: {}
    }
    this.hanldeSignIn = this.handleSignIn.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
    this.getPets = this.getPets.bind(this);
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user: user,
          userName: user.displayName,
          userId: user.uid,
          signedIn: true},
        () => {
          this.sendUserId();
          this.getPets();
        });
      }
    });
  }

  componentWillUpdate(newProps, newState) {
    console.log("newState", newState);
    console.log("newProp", newProps);
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("prevState", prevState);
  //   console.log("prevProp", prevProps);
  // }

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
    let userId = this.state.user.uid;
    this.props.onUserIdToState(userId);
  }

  getPets() {
    let newPetState;
    let userPets = firebase.database().ref('pets/' + this.state.userId);
    userPets.on('value', (snap) => {
      newPetState = Object.assign({}, snap.val());
      this.setState({ pets: newPetState });
      this.sendPetList();
    });
  }

  sendPetList(){
    let petList = this.state.pets;
    this.props.onPetListToState(petList);
  }

  render() {
    if(this.state.signedIn === false) {
      hideButton = showUserInfo;
      // userInfoDisplay = hideUserInfo;
      show = hideUserInfo;
    } else {
      hideButton = buttonHidden;
      show = userInfoDisplay;
    }

    return(
      <div style={styles}>
      <style>{`
        .signOut-toggle {
          color: black;
        }
        .signOut-toggle:hover {
          color: red;
        }
      `}
      </style>
      <div style={hideButton}>
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
        </div>
        <div style={show}>
          <div style={userInfoDisplay}>
            <p id="signIn">Hi,   {this.state.userName}
            <span
            className={"signOut-toggle"}
            style={{marginLeft: '90px'}}
             onClick={this.handleSignOut}>Sign Out</span></p>
          </div>
        </div>
      </div>
    );
  }
}

OAuth.propTypes = {
  onUserIdToState: PropTypes.func,
  onPetIdToState: PropTypes.func,
  onPetListToState: PropTypes.func,
  userId: PropTypes.string,
  petList: PropTypes.object
}
export default OAuth;
