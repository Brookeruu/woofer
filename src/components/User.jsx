import React from 'react';
import PetList from './PetList';
import NewPet from './NewPet';
import PropTypes from 'prop-types';

export default function User(props) {
 console.log(props);
  return(
    <div>
      <div
      style={{
        backgroundColor: '#93ccbf',
        boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)',
        padding: '1em',
        marginLeft: '0',
        minHeight: '100%',
        width: '350px',
        marginTop: '80px'
      }}

      >
        <h3
          style={{
            height: '40px',
            fontSize: '48px',
            letterspacing: '3px'
          }}
        >
      </h3>
        <PetList
          onUserIdToState={props.onUserIdToState}
          onPetIdToState={props.onPetIdToState}
          onPetListToState={props.onPetListToState}
          userId={props.userId}
          petList={props.petList}
        />
        <NewPet
          onUserIdToState={props.onUserIdToState}
          onPetIdToState={props.onPetIdToState}
          onPetListToState={props.onPetListToState}
          userId={props.userId}
          petList={props.petList}
        />
      </div>
    </div>
  )
}

User.propTypes = {
  onUserIdToState: PropTypes.func,
  onPetIdToState: PropTypes.func,
  onPetListToState: PropTypes.func,
  userId: PropTypes.string,
  petList: PropTypes.array
}
