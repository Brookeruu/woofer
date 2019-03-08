import React from 'react';
import Button from './styled-components/Button';
// import pawprint from '../images/paw-print.svg';


class NewPet extends React.Component {
  constructor(props) {
    super(props)
    this.addPetButtonRef = React.createRef();
  }

  render(){
      return(
        <div>

          <Button>Add another pup!</Button>

        </div>
      );
  }
}

export default NewPet;
