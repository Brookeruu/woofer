import React from 'react';

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


export default function Calendar() {
  return (
    <div>
      <p
      style={{
        letterSpacing: '2px'
      }}
      >CALENDAR
      </p>
    </div>
    
  )
  
}

