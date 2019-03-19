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

export default function Vaccine() {
  return (
    <div>
    <style> {`
      .hover-toggle {
        letterSpacing: 2px;
      }
      .hover-toggle:hover {
        text-decoration: underline;
        color: #000000;
        letterSpacing: 2px
      }
    `}</style>
      <p className={"hover-toggle"} >VACCINES
      </p>

    
    </div>

  )

}
