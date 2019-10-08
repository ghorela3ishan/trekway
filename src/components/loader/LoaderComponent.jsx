import React , { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
    position: 'relative',
    top: '30vh',
    left: '50%'
  },
  container: {
    backgroundColor: '#e0e2e5'
  }
});

 class Loader extends Component {
     render(){
        const { classes } = this.props;
        return (
          <div className={classes.container}>
            <CircularProgress className={classes.progress}  color="secondary"/>
          </div>
        );
      }
     }

     export default withStyles(styles)(Loader);