import React from 'react';
import TreatmentList from './TreatmentList';
import NewTreatment from './NewTreatment';
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
    }
  }

  handleClickShowNewTreatmentForm() {
    if (this.state.newTreatmentFormVisible === false) {
    this.setState({newTreatmentFormVisible: true});
    }
  }
  render() {

    let currentlyVisibleTreatments = null;
    if(this.state.treatmentListVisible) {
      currentlyVisibleTreatments = <TreatmentList  onShowNewTreatmentForm={this.handleClickShowNewTreatmentForm} />
    } else {
      currentlyVisibleTreatments = null
    }

    let currentlyVisibleForm = null;
    if((this.state.newTreatmentFormVisible === true)) {
      currentlyVisibleForm = <NewTreatment
      onShowNewTreatmentForm={this.handleClickShowNewTreatmentForm}/>
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

export default TreatmentControl;
