import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import jupiter from './../images/jupiter.png';
import phantom from './../images/phantom.png';



export default function Pet(props) {
  
  return (
    <div>

      <img  
          src={props.image}
          style={{
            width: '200px',
            borderRadius: '50%',
            marginTop: '30px'
          }}
      ></img>
      <h3>{props.name}</h3>
      <p>Microchip: {props.microchip}</p>
      <p>Age: {props.age} yrs</p>
      
    </div>
  )
}

Pet.propTypes = {
  name: PropTypes.string.isRequired,
  microchip: PropTypes.string,
  age: PropTypes.string,
  image: PropTypes.string
}



