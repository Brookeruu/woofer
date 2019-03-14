import React from 'react';


const labelStyle = {
  color: '#808080',
  fontSize: '35px',
  textTransform: 'uppercase',
  letterSpacing: '1.5px',
  textAlign: 'left',
  marginLeft: '30px'
}

const lineSpace = {
  marginBottom: '-30px'
}
export default function Calendar() {
  return (
    <div style={labelStyle}>

        <p style={lineSpace}><span style={{color: 'black'}}>Bravecto</span> | Due: 3/19/2019</p>
        <p><span style={{color: 'black'}}>Tri-Heart Plus</span> | Due: 4/10/2019</p>

  </div>
  )

}
