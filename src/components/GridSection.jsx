import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Treatment from './Treatment';
import TreatmentList from './TreatmentList';
import TreatmentControl from './TreatmentControl';
import Vaccine from './Vaccine';
import VetVisit from './VetVisit';
import Notes from './Notes';
import Calendar from './Calendar';
import GridWrapper from './styled-components/GridWrapper';
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

const hovered = {
  backgroundColor: '#E8E8E8'
}

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
          minHeight: '100vh',
          margin: '20px',
          marginTop: '0px'
        }}
      >
        <div className={classes.root, classes.titles}>
          <Grid container spacing={24}>
            <Grid item sm>
                <Paper
                  id="treatments"
                  className={classes.paper}
                  >
                  <GridWrapper>
                  <img className={classes.icon} src={pills}></img>
                  <TreatmentControl />
                  </GridWrapper>
                </Paper>
            </Grid>
            <Grid item sm>
              <Paper
                id="vaccines"
                className={classes.paper}
                >
                <GridWrapper>
                  <img className={classes.icon} src={syringe}></img>
                  <Vaccine />
                </GridWrapper>
              </Paper>
            </Grid>
            <Grid item sm>
              <Paper
                className={classes.paper}>
                <GridWrapper>
                <img className={classes.icon} src={stethoscope}></img>
                <VetVisit />
                </GridWrapper>
              </Paper>
            </Grid>
            <Grid item sm>
              <Paper
                className={classes.paper}>
                <GridWrapper>
                <img className={classes.icon} src={notes}></img>
                <Notes />
                </GridWrapper>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
              <GridWrapper>
              <img className={classes.icon} src={calendar}></img>
              <Calendar />
              </GridWrapper>
              </Paper>
            </Grid>
          </Grid>

        </div>
      </div>
    );}
}

GridSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GridSection)
