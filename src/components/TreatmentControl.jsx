import React from 'react';
import TreatmentList from './TreatmentList';
import NewTreatment from './NewTreatment';
import GridSection from './GridSection';
import firebase from '../firebaseConfig';
import PropTypes from 'prop-types';
// import Button from './styled-components/Button';

class TreatmentControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      treatmentListVisible: false,
      newTreatmentFormVisible: false
    };
    this.handleClickTreatmentList = this.handleClickTreatmentList.bind(this);
    this.handleClickShowNewTreatmentForm = this.handleClickShowNewTreatmentForm.bind(this);
  }

  handleClickTreatmentList() {
    if (this.state.treatmentListVisible === false) {
    this.setState({treatmentListVisible: true});
    } else {
      this.setState({treatmentListVisible: false});
      this.setState({newTreatmentFormVisible: false});
    }
  }

  handleClickShowNewTreatmentForm() {
    if (this.state.newTreatmentFormVisible === false) {
    this.setState({newTreatmentFormVisible: true});
  } else {
    this.setState({newTreatmentFormVisible: false})
  }
  }
  render() {

    let currentlyVisibleTreatments = null;
    if(this.state.treatmentListVisible) {
      currentlyVisibleTreatments = <TreatmentList  onShowNewTreatmentForm={this.handleClickShowNewTreatmentForm}
      onUserIdToState={this.props.onUserIdToState}
      onPetIdToState={this.props.onPetIdToState}
      onPetListToState={this.props.onPetListToState}
      userId={this.props.userId}
      petList={this.props.petList} />
    } else {
      currentlyVisibleTreatments = null;
    }

    let currentlyVisibleForm = null;
    if((this.state.newTreatmentFormVisible)) {
      currentlyVisibleForm = <NewTreatment
      onShowNewTreatmentForm={this.handleClickShowNewTreatmentForm}
      onUserIdToState={this.props.onUserIdToState}
      onPetIdToState={this.props.onPetIdToState}
      onPetListToState={this.props.onPetListToState}
      userId={this.props.userId}
      petList={this.props.petList}
      />
    } else {
      currentlyVisibleForm = null
    }

    return(
      <div>
        <style> {`
          .hover-toggle {}
          .hover-toggle:hover {
            text-decoration: underline;
            color: #000000;
          }
        `}</style>
          <p
            className="hover-toggle"
            style={{
              letterSpacing: '2px'
            }}
            onClick={this.handleClickTreatmentList}
          >
          TREATMENTS
          </p>
          {currentlyVisibleTreatments}
          {currentlyVisibleForm}
      </div>
    );
  }
}

TreatmentControl.propTypes = {
  onUserIdToState: PropTypes.func,
  onPetIdToState: PropTypes.func,
  onPetListToState: PropTypes.func,
  userId: PropTypes.string,
  petList: PropTypes.object
};

export default TreatmentControl;
