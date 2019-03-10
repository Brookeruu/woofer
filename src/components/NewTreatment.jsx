import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Button from './styled-components/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Treatment from './Treatment';

let _treatment = null;
let _dog = 'Jupiter';
let _received = null;
let _due = null;

const labelStyle = {
  color: '#808080',
  fontSize: '30px',
  textTransform: 'uppercase',
  letterSpacing: '1.5px',
  textAlign: 'left'
}

const dateInput = {
  width: '50%',
  minHeight: '20px',
  padding: '12px 20px',
  margin: '8px 0',
  borderRadius: '3px'
}

class NewTreatment extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      receivedDate: null,
      dueDate: null
    }
    this.handleNewTreatmentSubmission = this.handleNewTreatmentSubmission.bind(this);
    this.handleReceivedDate = this.handleReceivedDate.bind(this);
    this.handleDueDate = this.handleDueDate.bind(this);
  };

  handleNewTreatmentSubmission(event) {
    event.preventDefault();
      // let receiveDate = this.state.receivedDate
      // console.log(receiveDate);
      console.log(_treatment.value);
      console.log(_dog);
      console.log(_received);
      console.log(_due);
      // _treatment.value = '';
      // _received.value = '';
      // _due.value = '';
    // this.onHandleNewTreatmentToList({treatment: _treatment.value, dog: 'Jupiter', received: _received.value, due: _due.value, id: v4()})
  }

  componentDidUpdate() {
    // this.handleNewTreatmentSubmission();
  }

  handleReceivedDate(date) {
    this.setState({receivedDate: date})
    console.log(date);
  }

  handleDueDate(date) {
    this.setState({dueDate: date})
    console.log(date)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleNewTreatmentSubmission} >
          <input
            placeholder="Treatment Name"
            type='text'
            id='treatment'
            ref={(input) => {_treatment = input;}} />
          <br/>
          <label
            style={labelStyle}
          >Date given: </label>
          <DatePicker
            placeholderText="Click date received"
            selected={this.state.receivedDate}
            onChange={this.handleReceivedDate}
            showYearDropdown
            dateFormatCalendar="MMMM"
            scrollableYearDropdown
            yearDropdownItemNumber={7}
            name="receivedDate"
            type='text'
            id='received'
            ref={(input) => {_received = this.received;}}
          />
          <br/>
          <label
            style={labelStyle}
          >Next due date: </label>
          <DatePicker
            placeholderText="Click next due date"
            selected={this.state.dueDate}
            onChange={this.handleDueDate}
            dateFormatCalendar="MMMM"
            scrollableYearDropdown
            yearDropdownItemNumber={7}
            showYearDropDown
            name="dueDate"
            type='text'
            id='due'
            ref={(input) => {_due = this.due;}}
          />
          <br/>
          <Button
          type='submit'
          >Submit</Button>
        </form>
      </div>
    );
  }
}
  NewTreatment.propTypes = {
    // onHandleNewTreatmentToList: PropTypes.func,
    onShowNewTreatmentForm: PropTypes.func
  }



export default NewTreatment;
