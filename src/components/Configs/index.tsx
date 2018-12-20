import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ConfigsActive from './ConfigsActive';
import { ReducersConfigStore } from '../../reducers/configs';
import { ReducersInterface } from '../../reducers';

const Configs = ({ active, toggleActive }: any) => (
  <div>
    {!active ? (
      <button onClick={toggleActive}>
        Advanced Options
      </button>
    ) : (
        <button onClick={toggleActive}>
          Advanced Options activated
        </button>
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


