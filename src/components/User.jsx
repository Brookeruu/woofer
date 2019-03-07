import React from 'react';
import PetList from './PetList'

export default function User() {
  
  return(
    <div>
      <div 
      style={{
        backgroundColor: '#93ccbf',
        boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)',
        padding: '1em',
        marginLeft: '0',
        minHeight: '100%',
        width: '350px'
      }}
      
      >
        <h3
          style={{
            fontSize: '48px',
            letterspacing: '3px'
          }}
        >
        Hi, Brooke!</h3>
        <PetList />
      </div>
    </div>
  )
}