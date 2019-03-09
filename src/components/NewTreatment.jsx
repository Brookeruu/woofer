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

class NewTreatment extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      receivedDate: null,
      dueDate: null
    }
    this.handleReceivedDate = this.handleReceivedDate.bind(this);
    this.handleDueDate = this.handleDueDate.bind(this);
  };

  handleNewTreatmentSubmission(event) {
    event.preventDefault();
    this.onHandleNewTreatmentToList({treatment: _treatment.value, dog: 'Jupiter', received: _received.value, due: _due.value, id: v4()})
    console.log(this)
  }

  handleReceivedDate(date) {
    this.setState({
      receivedDate: date
    })
  }

  handleDueDate(date) {
    this.setState({
      dueDate: date
    })
  }

  handleSubmit(e) {
      e.preventDefault();
      let receiveDate = this.state.receivedDate
      console.log("test: handle submit");
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleNewTreatmentSubmission} >
          <input
            placeholder="Treatment Name"
            type='text'
            id='treatment'
            ref={(input) => {_treatment = this.treatment;}}
          ></input>
          <br/>
          <label>Date given: </label>
          <DatePicker
            selected={this.state.receivedDate}
            onChange={this.handleReceivedDate}
            name="receivedDate"
            dateForm="MM/DD/YYYY"
            type='text'
            id='received'
            ref={(input) => {_received = this.received;}}
          />
          <br/>
          <label>Next due date: </label>
          <DatePicker
            selected={this.state.dueDate}
            onChange={this.handleDueDate}
            name="dueDate"
            dateForm="MM/DD/YYYY"
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
