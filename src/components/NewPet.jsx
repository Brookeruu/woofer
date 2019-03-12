import React from 'react';
import Button from './styled-components/Button';
import firebase from '../firebaseConfig.js';
import OAuth from './OAuth';
import PropTypes from 'prop-types';
// import pawprint from '../images/paw-print.svg';

class NewPet extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      microchip: '',
      age: '',
      // userId: this.props.userId,
      image: null
    }
    console.log(this.props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.addPetButtonRef = React.createRef();
  }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({ userId: nextProps.user.uid })

  handleChange(e) {
  this.setState({
    [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const petsRef = firebase.database().ref('pets/' + this.props.userId);
    const pet = {
      name: this.state.name,
      microchip: this.state.microchip,
      age: this.state.age,
      userId: this.props.userId,
      image: null
    }
    petsRef.push(pet);
    this.setState({
      userId: '',
      name: '',
      microchip: '',
      age: ''
    });
    this.sendPetId();
  }

  sendPetId() {
    let petId = this.state.pry.id
    this.props.onPetIdToState(petId);
  }


  render(){

    console.log(this.props);

      return(
        <div>

        <form onSubmit={this.handleSubmit}>
            <input type="text" name="name" placeholder="What's your pup's name?" onChange={this.handleChange} value={this.state.name} />
            <input type="text" name="microchip" placeholder="Enter pup's microchip #" onChange={this.handleChange} value={this.state.microchip} />
            <input type="text" name="age" placeholder="Enter age in years" onChange={this.handleChange} value={this.state.age} />
            <Button>Add another pup!</Button>
          </form>


        </div>
      );
  }
}

NewPet.propTypes = {
  userId: PropTypes.string
}

export default NewPet;
