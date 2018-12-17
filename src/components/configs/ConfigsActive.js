import React from 'react'
import PropTypes from 'prop-types'

const ConfigsActive = ({ active, children, onClick }) => (
  <div>
    active configs
  </div>

)

ConfigsActive.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default ConfigsActive
