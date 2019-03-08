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
  };

  handleNewTreatmentSubmission(event) {
    event.preventDefault();
    this.props.onHandleNewTreatmentToList({treatment: _treatment.value, dog: 'Jupiter', received: _received.value, due: _due.value, id: v4()})
  }

  handleReceivedDate(date) {
    this.setDate({
      receivedDate: date
    })
  }
  render() {
    return(
      <div>
        <form onSubmit={this.handleNewTreatmentSubmission} >
          <input
            type='text'
            id='treatment'
            ref={(input) => {_treatment = this.treatment;}}
          ></input>
          <DatePicker
            selected={this.state.receivedDate}
            dateForm="MM/DD/YYYY"
            type='text'
            id='received'
            ref={(input) => {_received = this.received;}}
          />
          <DatePicker
            selected={this.state.dueDate}
            type='text'
            id='due'
            ref={(input) => {_due = this.due;}}
          />
          <br/>
          <Button type='submit'>Add Treatment</Button>
        </form>
      </div>
    );
  }
}
  NewTreatment.propTypes = {
    onHandleNewTreatmentToList: PropTypes.func
  }



export default NewTreatment;
