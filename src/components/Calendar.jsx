import React from 'react';

export default function Calendar() {
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
      <p className={"hover-toggle"} >CALENDAR
      </p>
    </div>

  )

}
