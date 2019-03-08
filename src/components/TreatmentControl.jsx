import React from 'react';
import TreatmentList from './TreatmentList';
import Button from './styled-components/Button';

class TreatmentControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      treatmentListVisible: false,
      newTreatmentFormVisible: false
    };
    this.handleClickTreatmentList = this.handleClickTreatmentList.bind(this);
  }

  handleClickTreatmentList() {
    if (this.state.treatmentListVisible === false) {
    this.setState({treatmentListVisible: true});
  } else {
    this.setState({treatmentListVisible: false});
  }

    console.log('treatmentListVisible is currently set to ' + this.state.treatmentListVisible);
  }

  handleClickNewTreatment() {
    this.setState({newTreatmentFormVisible: true});
    console.log('newTreatmentFormVisible is currently set to ' + this.state.newTreatmentFormVisible);
  }



  render() {
    let currentlyVisibleTreatments = null;
    if(this.state.treatmentListVisible) {
      currentlyVisibleTreatments = <TreatmentList />
    } else {
      currentlyVisibleTreatments = null
    }

    return(
      <div>
        <p onClick={this.handleClickTreatmentList}>TREATMENTS</p>
        {currentlyVisibleTreatments}
      </div>
    );
  }
}

export default TreatmentControl;
