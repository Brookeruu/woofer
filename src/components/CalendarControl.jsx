import React from 'react';
import Calendar from './Calendar';

export default class CalendarControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      calendarVisible: false
    }
    this.handleClickShowCalendar = this.handleClickShowCalendar.bind(this);
  }

  handleClickShowCalendar() {
    if (this.state.calendarVisible === false) {
      this.setState({calendarVisible: true})
    } else {
      this.setState({calendarVisible: false});
    }
  }

  render() {
    let currentlyVisibleCalendar = null;

    if(this.state.calendarVisible) {
      currentlyVisibleCalendar = <Calendar />
    } else {
      currentlyVisibleCalendar = null;
    }

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
        <p className={"hover-toggle"}
        onClick={this.handleClickShowCalendar}
        >GOOGLE CALENDAR
        </p>
        {currentlyVisibleCalendar}
      </div>

    )
  }
}
