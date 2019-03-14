import React from 'react';
import NewPet from './NewPet.jsx';
import Pet from './Pet.jsx';
import PropTypes from 'prop-types';
import jupiter from './../images/jupiter.png';
import phantom from './../images/phantom.png';
import jupie from './../images/dogpark.jpg';
import jupiderp from './../images/jup.jpg';


export default function Petlist (props) {

let dogList = (props.petList)
console.log("dogList", dogList);
console.log(props.petList);

  return (
    <div>
      <div>

        {Object.keys(dogList).map(index =>
          <Pet
              name={dogList[index].name}
              microchip={dogList[index].microchip}
              age={dogList[index].age}
              image={dogList[index].image}
              key={index}
              />
        )}
      </div>
    </div>
  )
}

Petlist.propTypes = {
  onUserIdToState: PropTypes.func,
  onPetIdToState: PropTypes.func,
  onPetListToState: PropTypes.func,
  userId: PropTypes.string,
  petList: PropTypes.object
}
