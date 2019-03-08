import React from 'react';
import TreatmentList from './TreatmentList';
import NewTreatment from './NewTreatment';
import Button from './styled-components/Button';

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
    }
  }

  handleClickShowNewTreatmentForm() {
    this.setState({newTreatmentFormVisible: true});
  }

  render() {

    let currentlyVisibleTreatments = null;
    if(this.state.treatmentListVisible) {
      currentlyVisibleTreatments = <TreatmentList />
    } else {
      currentlyVisibleTreatments = null
    }

    let currentlyVisibleForm = null;
    if((this.state.newTreatmentFormVisible === true) && (this.state.treatmentListVisible === true)) {
      currentlyVisibleForm = <NewTreatment />
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
          onShowNewTreatmentForm={this.handleClickShowNewTreatmentForm}
        >
        TREATMENTS
        </p>
        {currentlyVisibleTreatments}
        {currentlyVisibleForm}
      </div>
    );
  }
}

export default TreatmentControl;
