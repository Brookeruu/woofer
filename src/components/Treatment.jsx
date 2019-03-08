import React from 'react';
import NewTreatment from './NewTreatment';
import PropTypes from 'prop-types';



  const title = {
    color: '#808080',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    textAlign: 'left',
    paddingLeft : '10px',
    marginBottom: '-20px',
    marginTop: '-10px'
  }
  const text = {
    color: '#A9A9A9',
    fontSize: '30px',
    marginTop: '0px',
    marginBotton: '20px',
    letterSpacing: '2px',
    lineHeight: '5px',
    textAlign: 'left',
    paddingLeft: '10px'
  }


export default function Treatment(props) {
  // const { classes } = props;
  return (
    <div>
      <h5
        style={title}
      >{props.treatment}</h5>
      <div
      style={text}>
        <p>Received: {props.received}</p>
        <p>Due: {props.due}</p>
      </div>


    </div>
  )
}

Treatment.propTypes = {
  treatment: PropTypes.string,
  dog: PropTypes.string,
  received: PropTypes.string,
  due: PropTypes.string

}
