import React from 'react';
import Button from './styled-components/Button';
import firebase from '../firebaseConfig.js';
import OAuth from './OAuth';
import PropTypes from 'prop-types';
import jupiderp from './../images/jup.jpg';

class NewPet extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      microchip: '',
      age: '',
      userId: '',
      image: null,
      petId: ''
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
    const petsRef = firebase.database().ref('pets/' + this.props.userId);
    const pet = {
      name: this.state.name,
      microchip: this.state.microchip,
      age: this.state.age,
      userId: this.props.userId,
      image: jupiderp
    }
    petsRef.push(pet);
    this.setState({
      userId: '',
      name: '',
      microchip: '',
      age: ''
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({userId: this.props.userId})
  }

  render(){
    console.log(this.props.userId);
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
  onUserIdToState: PropTypes.func,
  onPetIdToState: PropTypes.func,
  onPetListToState: PropTypes.func,
  userId: PropTypes.string,
  petList: PropTypes.object
}

export default NewPet;
