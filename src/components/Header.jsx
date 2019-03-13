import React from 'react';
import OAuth from './OAuth';
import dogpaw from '../images/dog-paw.png';


const icon = {
  height: '35px',
  marginBottom: '15px',
  marginLeft: '12px',
  transform: 'rotate(13deg)'
}

export default function Header() {

  return(
    <div
      style={{
        position: 'fixed',
        width: '100%',
        height: '100px',
        top: '0px',
        backgroundColor: 'white',
        textAlign: 'center',
        zIndex: '100',
        borderBottom: '3px solid black'
      }}
    >
    <h1
      style={{
        fontSize: '120px',
        position: 'fixed',
        top: '-100px',
        left: '50px',
        letterSpacing: '3px'
      }}
    >WOOFER
    <img style={icon} src={dogpaw} alt="pawprint"></img></h1>
    <OAuth />

    </div>

  )
}
