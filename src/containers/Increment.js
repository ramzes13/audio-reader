import React from 'react'
import { connect } from 'react-redux'

const Increment = ({ dispatch, state }) => {
  console.log({ state });
  return (
    <div>
      {state}
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>
        INCREMENT
        </button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>
        DECREMENT
        </button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  state
})

export default connect(
  mapStateToProps,
  // null,
)(Increment)
