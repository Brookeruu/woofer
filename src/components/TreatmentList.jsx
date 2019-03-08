import React from 'react';
import Treatment from './Treatment';
import PropTypes from 'prop-types';
import Button from './styled-components/Button';

var masterTreatmentList = [
  {
    treatment: 'Bravecto',
    dog: 'Jupiter',
    received: '12/19/2018',
    due: '03/19/2019'
  },
  {
    treatment: 'Tri•Heart Plus',
    dog: 'Jupiter',
    received: '03/10/2019',
    due: '04/10/2019'
  }

]

export default function TreatmentList(props) {

  return(
    <div>
      <p>Treatment List</p>

      {masterTreatmentList.map((treatment,index) =>
      <Treatment
        treatment={treatment.treatment}
        dog={treatment.dog}
        received={treatment.received}
        due={treatment.due}
        key={index}
      />
      )}
      <Button>Add Treatment</Button>
    </div>

  )
}
