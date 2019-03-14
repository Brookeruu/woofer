import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Button from './styled-components/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Treatment from './Treatment';
import firebase from '../firebaseConfig.js';


let _treatment = null;
let _dog = 'Jupiter';
let _received = null;
let _due = null;


let inputDate1;
let inputDate2;

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
      dueDate: null,
      dog: '',
      treatment: '',
      userId: ''
    }
    this.handleNewTreatmentSubmission = this.handleNewTreatmentSubmission.bind(this);
    this.handleReceivedDate = this.handleReceivedDate.bind(this);
    this.handleDueDate = this.handleDueDate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(e) {
  this.setState({
    [e.target.name]: e.target.value
    });
  }

  handleNewTreatmentSubmission(event) {
    event.preventDefault();
    this.setState({dog: _dog});
    this.setState({treatment: _treatment.value})
    const treatmentRef = firebase.database().ref('treatments/' + this.props.userId);
    const treatment = {
      treatment: _treatment.value,
      receivedDate: inputDate1,
      dueDate: inputDate2,
      userId: this.props.userId
    }
    console.log(treatment);
    console.log(this.state.receivedDate);

    treatmentRef.push(treatment);
      this.setState({dog: _dog});
      this.setState({treatment: _treatment.value})
      console.log(this.state);
    }

  componentWillReceiveProps(nextProps) {
    this.setState({userId: this.props.userId})
  }

  handleReceivedDate(date) {
    this.setState({receivedDate: date});
    inputDate1 = date;
    console.log(date);
  }

  handleDueDate(date) {
    inputDate2 = date;
    this.setState({dueDate: date})
    console.log(date)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleNewTreatmentSubmission} >
        <label
          style={labelStyle}>
          Treatment Name </label>
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
  onUserIdToState: PropTypes.func,
  onPetIdToState: PropTypes.func,
  onPetListToState: PropTypes.func,
  userId: PropTypes.string,
  petList: PropTypes.object
}




export default NewTreatment;



// class NewTreatment extends React.Component {
//
//   constructor(props) {
//     super(props)
//     this.state = {
//       receivedDate: null,
//       dueDate: null,
//       dog: 'Jupiter',
//       treatment:''
//     }
//     this.handleNewTreatmentSubmission = this.handleNewTreatmentSubmission.bind(this);
//     this.handleReceivedDate = this.handleReceivedDate.bind(this);
//     this.handleDueDate = this.handleDueDate.bind(this);
//   };
//
//   handleNewTreatmentSubmission(event) {
//     event.preventDefault();
//       // let receiveDate = this.state.receivedDate
//       // console.log(receiveDate);
//       console.log(_treatment.value);
//       console.log(_treatment.value);
//
//       this.setState({dog: _dog});
//       this.setState({treatment: _treatment});
//       console.log(this.state);
//
//       // _treatment.value = '';
//       // _received.value = '';
//       // _due.value = '';
//     // this.onHandleNewTreatmentToList({treatment: _treatment.value, dog: 'Jupiter', received: _received.value, due: _due.value, id: v4()})
//   }
//
//
//   render() {
//     return(
//       <div>
//         <form onSubmit={this.handleNewTreatmentSubmission} >
//         <label
//           style={labelStyle}
//         >Treatment Name: </label>
//           <input
//             placeholder="Treatment Name"
//             type='text'
//             id='treatment'
//             ref={(input) => {_treatment = input;}} />
//           <br/>
//           <label
//             style={labelStyle}
//           >Date given: </label>
//           <DatePicker
//             placeholderText="Click date received"
//             selected={this.state.receivedDate}
//             onChange={this.handleReceivedDate}
//             showYearDropdown
//             dateFormatCalendar="MMMM"
//             scrollableYearDropdown
//             yearDropdownItemNumber={7}
//             name="receivedDate"
//             type='text'
//             id='received'
//             ref={(input) => {_received = this.received;}}
//           />
//           <br/>
//           <label
//             style={labelStyle}
//           >Next due date: </label>
//           <DatePicker
//             placeholderText="Click next due date"
//             selected={this.state.dueDate}
//             onChange={this.handleDueDate}
//             dateFormatCalendar="MMMM"
//             scrollableYearDropdown
//             yearDropdownItemNumber={7}
//             showYearDropDown
//             name="dueDate"
//             type='text'
//             id='due'
//             ref={(input) => {_due = this.due;}}
//           />
//           <br/>
//           <Button
//           type='submit'
//           >Submit</Button>
//         </form>
//       </div>
//     );
//   }
// }
//   NewTreatment.propTypes = {
//     // onHandleNewTreatmentToList: PropTypes.func,
//     onShowNewTreatmentForm: PropTypes.func
//   }
//
//
//
// export default NewTreatment;
