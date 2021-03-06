import React from 'react';
import { object } from 'prop-types';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ErrorReporter from '../components/core';
import { BottomNav, Header } from '../components';
import '../index.scss';

const styles = theme => ({
  content: {
    backgroundColor: theme.palette.secondary.main,
    display: 'flex',
    margin: 'auto',
  },
});

const HomeScreen = props => {
  const { classes } = props;

  return (
    <ErrorReporter>
      <div className="app">
        <Header />
        <Typography variant="body2" color="inherit" className={classes.content}>
          Content Here!
        </Typography>
        <BottomNav />
      </div>
    </ErrorReporter>
  );
};

HomeScreen.propTypes = {
  classes: object.isRequired,
};

export default withStyles(styles)(HomeScreen);
