import React from 'react';
import NewPet from './NewPet.jsx';
import Pet from './Pet.jsx';
import PropTypes from 'prop-types';

const petList = [
  {
    name: 'Jupiter',
    microchip: '1234567',
    age: '2',
    image: './../images/jupiter.png'
  }
  // {
  //   name: 'Phantom',
  //   microchip: '1234567',
  //   age: '2',
  //   image: './../images/phantom.png'
  // }
]


export default function Petlist () {
  
  return (
    <div>
      <h3>This will be the List of Pets</h3>
      <NewPet />
      {petList.map((pet, index) =>
        <Pet 
            name={pet.name}
            microchip={pet.microchip}
            age={pet.age}
            image={pet.picture}
            />
      
      )}
    </div>
  )
}
