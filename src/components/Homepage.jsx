import React from 'react';
import User from './User';
import Header from './Header';
import GridSection from './GridSection';
import PropTypes from 'prop-types';

export default function Homepage(props) {
console.log(props);
  return (
    <div>
      <Header
        onUserIdToState={props.onUserIdToState}
        onPetIdToState={props.onPetIdToState}
        onPetListToState={props.onPetListToState}
        userId={props.userId}
        petList={props.petList}
       />
      <div style={{display: 'flex'}} >
        <User
          onUserIdToState={props.onUserIdToState}
          onPetIdToState={props.onPetIdToState}
          onPetListToState={props.onPetListToState}
          userId={props.userId}
          petList={props.petList}
         />
        <GridSection
          onUserIdToState={props.onUserIdToState}
          onPetIdToState={props.onPetIdToState}
          onPetListToState={props.onPetListToState}
          userId={props.userId}
        />
      </div>
    </div>
  )
}

Homepage.propTypes = {
  onUserIdToState: PropTypes.func,
  onPetIdToState: PropTypes.func,
  onPetListToState: PropTypes.func,
  userId: PropTypes.string,
  petList: PropTypes.object
}
