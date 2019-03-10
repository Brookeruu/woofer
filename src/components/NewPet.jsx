import React from 'react';
import Button from './styled-components/Button';
import firebase from '../firebaseConfig.js';
// import pawprint from '../images/paw-print.svg';


class NewPet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      microchip: '',
      age: '',
      image: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.addPetButtonRef = React.createRef();
  }

  handleChange(e) {
  this.setState({
    [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const petsRef = firebase.database().ref('pets');
    const pet = {
      name: this.state.name,
      microchip: this.state.microchip,
      age: this.state.age,
      image: null
    }
    petsRef.push(pet);
    this.setState({
      name: '',
      microchip: '',
      age: ''
    });
  }

  render(){
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

export default NewPet;
