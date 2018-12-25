import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';

import ConfigsActive from './ConfigsActive';
import { ReducersConfigStore } from '../../reducers/configs';
import { ReducersInterface } from '../../reducers';
import { actions } from '../../actions';
import UiGenericContainer from '../../ui/GenericComponent';

const Configs = ({ active, toggleActive }: any) => (
  <UiGenericContainer active={active} toggleActive={toggleActive}>
    <Button variant="contained" color="primary">Advanced Options</Button>
  </UiGenericContainer>
);

const mapStateToProps = (state: ReducersInterface): ReducersConfigStore => ({ ...state.configs })

const mapDispatchToProps = (dispatch: any) => ({
  toggleActive: () => {
    dispatch({ type: actions.CONF_TOGLE })
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


