import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';

import ConfigsActive from './ConfigsActive';
import { ReducersConfigStore } from '../../reducers/configs';
import { ReducersInterface } from '../../reducers';

const Configs = ({ active, toggleActive }: any) => (
  <div>
    {!active ? (
      <Button onClick={toggleActive} variant="contained" color="secondary">Advanced Options</Button>
    ) : (
        <Button onClick={toggleActive} variant="contained" color="primary">Advanced Options</Button>
      )}
  </div>
);

const mapStateToProps = (state: ReducersInterface): ReducersConfigStore => ({ ...state.configs })

const mapDispatchToProps = (dispatch: any) => ({
  toggleActive: () => {
    dispatch({ type: 'TOGGLE_ACTIVE' })
  }
})

Configs.propTypes = {
  active: PropTypes.bool.isRequired,
  toggleActive: PropTypes.func.isRequired
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Configs)


