import React from 'react';
import NewPet from './NewPet.jsx';
import Pet from './Pet.jsx';
// import PropTypes from 'prop-types';
import jupiter from './../images/jupiter.png';
import phantom from './../images/phantom.png';

const petList = [
  {
    name: 'Jupiter',
    microchip: '1234567',
    age: '2',
    image: jupiter
  },
  {
    name: 'Phantom',
    microchip: '7654321',
    age: '7',
    image: phantom
  }
]


export default function Petlist () {

  return (
    <div>
      <div>

        {petList.map((pet, index) =>
          <Pet
              name={pet.name}
              microchip={pet.microchip}
              age={pet.age}
              image={pet.image}
              key={index}
              />

        )}


      </div>
    </div>
  )
}
