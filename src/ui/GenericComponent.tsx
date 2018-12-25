import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';

const styles = (theme: any) => ({
  root: {
    // height: 180,
  },
  container: {
    display: 'flex',
  },
  paper: {
    margin: theme.spacing.unit,
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
});

class SimpleCollapse extends React.Component<any, any>{
  render() {
    const { classes, active, toggleActive } = this.props;

    return (
      <div className={classes.root}>
        <Switch checked={active} onChange={toggleActive} aria-label="Collapse" />
        <Paper>
          <Collapse in={active}>
            {this.props.children}
          </Collapse>
        </Paper>
      </div>
    );
  }
}

// SimpleCollapse.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(SimpleCollapse);