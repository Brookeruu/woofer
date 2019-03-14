import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TreatmentControl from './TreatmentControl';
import Vaccine from './Vaccine';
import VetVisit from './VetVisit';
import Notes from './Notes';
import CalendarControl from './CalendarControl';
import pills from '../images/pills.png';
import syringe from '../images/syringe.png';
import stethoscope from '../images/stethoscope.png';
import notes from '../images/notes.png';
import calendar from '../images/calendar.png';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 1,
    textAlign: 'center',
    // color: theme.palette.text.secondary,
    color: '#808080',
    border: 'solid 5px #c38d9e',
    borderRadius: '15px',
    minHeight: '250px',
    minWidth: '300px',
    margin: 'auto'
  },
  icon: {
    maxHeight: '125px',
    margin: 'auto',
    marginTop: '30px'
  },
  titles: {
    // textTransform: 'uppercase',
    marginTop: '-20px',
    fontSize: '3em'
  }
});


class GridSection extends React.Component {
  constructor(props) {
    super(props)
    this.hoverOverGridRef = React.createRef();
  }

  render() {
    const { classes } = this.props;
    return (
     <div
        style={{
          padding: '1em',
          minHeight: '100vh',
          width: '100vh',
          margin: '20px',
          marginTop: '110px'
        }}
      >
        <div className={classes.root, classes.titles}>
        <style> {`
          .gridHover-toggle {
            padding: theme.spacing.unit * 1;
            text-align: center;
            color: #808080;
            border: solid 5px #c38d9e;
            border-radius: 15px;
            min-height: 250px;
            min-width: 300px;
            margin: auto;
          }
          .gridHover-toggle:hover {
            border: solid 5px #6bbaa7;
            min-height: 250px;
            min-width: 300px;
          }
        `}</style>
          <Grid container spacing={24}>
            <Grid item sm>
                <Paper
                  id="treatments"
                  className={classes.paper, "gridHover-toggle"}
                  >

                    <img className={classes.icon} src={pills} alt="pills icon"></img>
                    <TreatmentControl
                      onUserIdToState={this.props.onUserIdToState}
                      onPetIdToState={this.props.onPetIdToState}
                      onPetListToState={this.props.onPetListToState}
                      userId={this.props.userId}
                      petList={this.props.petList}
                     />

                </Paper>
            </Grid>

            <Grid item sm>
              <Paper
                id="vaccines"
                className={classes.paper, "gridHover-toggle"}
                >

                  <img className={classes.icon} src={syringe} alt="syringe icon"></img>
                  <Vaccine />

              </Paper>
            </Grid>

            <Grid item sm>
              <Paper
                className={classes.paper, "gridHover-toggle"}>

                <img className={classes.icon} src={stethoscope} alt="stethoscope icon"></img>
                <VetVisit />

              </Paper>
            </Grid>

            <Grid item sm>
              <Paper
                className={classes.paper, "gridHover-toggle"}>

                <img className={classes.icon} src={notes} alt="notes icon"></img>
                <Notes />

              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper className={classes.paper, "gridHover-toggle"}>

              <img className={classes.icon} src={calendar} alt="calendar icon"></img>
              <CalendarControl />

              </Paper>
            </Grid>
          </Grid>

        </div>
      </div>
    );}
}

GridSection.propTypes = {
  classes: PropTypes.object.isRequired,
  onUserIdToState: PropTypes.func,
  onPetIdToState: PropTypes.func,
  onPetListToState: PropTypes.func,
  userId: PropTypes.string,
  petList: PropTypes.object
};

export default withStyles(styles)(GridSection)
