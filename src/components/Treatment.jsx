import React from 'react';
// import NewTreatment from './NewTreatment';
import PropTypes from 'prop-types';



  const title = {
    color: '#38648c',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    textAlign: 'left',
    paddingLeft : '20px',
    marginBottom: '-20px',
    marginTop: '-10px'
  }
  const text = {
    color: '#808080',
    fontSize: '30px',
    textTransform: 'uppercase',
    marginTop: '0px',
    marginBotton: '20px',
    letterSpacing: '1.5px',
    lineHeight: '5px',
    textAlign: 'left',
    paddingLeft: '20px'
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
