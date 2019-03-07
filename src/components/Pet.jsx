import React from 'react';
import PropTypes from 'prop-types';
// import { v4 } from 'uuid';
import Title from './styled-components/Title.jsx';
import pawprint from '../images/paw-print.svg';
import dogpaw from '../images/dog-paw.png';

const pStyle = {
  color: '#c38d9e',
  textTransform: 'uppercase',
  fontSize: '36px',
  letterSpacing: '2px',
  lineSpacing: '10px'
}

const icon = {
  height: '30px',
  marginBottom: '20px'
}

export default function Pet(props) {
  const { classes } = props;
  
  return (
    <div>
      <img  
          src={props.image}
          alt='your dog'
          style={{
            width: '170px',
            border: 'solid 3px white',
            borderRadius: '50%',
            marginTop: '30px',
            marginBottom: '-30px'
          }}
      ></img>
    
        <Title style={{marginBottom: '-50px'}}>{props.name} <img style={icon} src={pawprint}></img></Title>
        
      <p style={pStyle}>
      Microchip: {props.microchip} <br/>
      Age: {props.age} yrs</p>
      
    </div>
  )
}

Pet.propTypes = {
  name: PropTypes.string.isRequired,
  microchip: PropTypes.string,
  age: PropTypes.string,
  image: PropTypes.string
}



