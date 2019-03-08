import React from 'react';
import NewTreatment from './NewTreatment';
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  icon: {
    maxHeight: '125px',
    margin: 'auto',
    marginTop: '30px'
  },
  titles: {
    // textTransform: 'uppercase',
    marginTop: '-20px',
    fontSize: '3em'
  }
});

const hovered = {
  backgroundColor: '#E8E8E8'
}


export default function Treatment() {
  return (
    <div>
      <p
      style={{
        letterSpacing: '2px'
      }}
      >TREATMENTS
      </p>
    </div>
  )
}

Treatment.propTypes = {
  treatment: PropTypes.string,
  dog: PropTypes.string,
  received: PropTypes.string,
  due: PropTypes.string

}
