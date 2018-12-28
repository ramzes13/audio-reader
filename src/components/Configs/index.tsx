import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames';
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import green from '@material-ui/core/colors/green';
import { withStyles } from '@material-ui/core/styles';

import { ReducersConfigStore } from '../../reducers/configs';
import { ReducersInterface } from '../../reducers';
import { actions } from '../../actions';

const styles = (theme: any) => ({
  fab: {
    margin: '0px',
    top: 'auto',
    right: '20px',
    bottom: '20px',
    left: 'auto',
    position: 'fixed' as 'fixed',
  },
  fabMenu: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
  },
});

class Configs extends React.Component<any, any>{
  render() {
    const { classes } = this.props;

    return (
      <Fab className={classNames(classes.fab, classes.fabMenu)} >
        <AddIcon />
      </Fab>
    )
  };
}

const mapStateToProps = (state: ReducersInterface): ReducersConfigStore => ({ ...state.configs })

const mapDispatchToProps = (dispatch: any) => ({
  toggleActive: () => {
    dispatch({ type: actions.CONF_TOGGLE })
  }
})

const component = connect(
  mapStateToProps,
  mapDispatchToProps
)(Configs)

export default withStyles(styles, { withTheme: true })(component);
