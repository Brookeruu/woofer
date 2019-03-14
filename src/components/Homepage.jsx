import React from 'react';
import User from './User';
import Header from './Header';
import GridSection from './GridSection';

export default function Homepage() {

  return (
    <div>
      <Header />
      <div style={{display: 'flex'}} >
        <User />
        <GridSection />
      </div>
    </div>
  )
}

// Homepage.propTypes = {
//   onUserIdToState: PropTypes.func,
//   onPetIdToState: PropTypes.func,
//
// }
