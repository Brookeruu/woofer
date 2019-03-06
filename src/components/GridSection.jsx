import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#fba100',
    minHeight: '250px',
    minWidth: '250px'
  }
});

function GridSection(props) {
  const { classes } = props;

  return (
    <div
      style={{
        padding: '1em',
        minHeight: '100vh',
        width: '100vh'
      }}
    >
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item sm>
            <Paper className={classes.paper}>Treatments</Paper>
          </Grid>
          <Grid item sm>
            <Paper className={classes.paper}>Vaccines</Paper>
          </Grid>
          <Grid item sm>
            <Paper className={classes.paper}>Vet Visits</Paper>
          </Grid>
          <Grid item sm>
            <Paper className={classes.paper}>Notes</Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>Calendar</Paper>
          </Grid>
        </Grid>

      </div>
    </div>
  );
}

GridSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GridSection)