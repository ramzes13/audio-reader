import React from 'react'
import PropTypes from 'prop-types'
import ConfigsActive from './ConfigsActive';

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

// Configs.propTypes = {
//   active: PropTypes.bool.isRequired,
//   toggleActive: PropTypes.func.isRequired
// }

export default Configs
