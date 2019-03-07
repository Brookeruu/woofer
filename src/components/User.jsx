import React from 'react';
import PetList from './PetList'

export default function User() {
  
  return(
    <div>
      <div 
      style={{
        backgroundColor: '#93ccbf',
        padding: '1em',
        marginLeft: '0',
        minHeight: '100%',
        width: '350px'
      }}
      
      >
        <h3
          style={{fontSize: '48px'}}
        >
        Hi, Brooke!</h3>
        <PetList />
      </div>
    </div>
  )
}