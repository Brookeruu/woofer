import React from 'react';
import NewPet from './NewPet.jsx';
import Pet from './Pet.jsx';

export default function Petlist () {
  
  return (
    <div>
      <h3>This will be the List of Pets</h3>
      <NewPet />
      <Pet />
    </div>
  )
}