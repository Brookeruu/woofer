import React from 'react';
import PropTypes from 'prop-types';
import jupiter from './../images/jupiter.jpg';


export default function Pet() {
  
  return (
    <div>
    <img  src={jupiter}
          style={{
            width: '70px',
            borderRadius: '50%'
          }}
    >
    </img>
      <h3>Pet info add rest of related pet info to go in here</h3>
      
    </div>
  )
}

