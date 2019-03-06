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
        minHeight: '100vh',
        width: '350px'
      }}
      
      >
        <h3>Hi Username!</h3>
        <PetList />
      </div>
    </div>
  )
}