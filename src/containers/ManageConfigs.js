import { connect } from 'react-redux'
import Configs from '../components/configs/Configs'

const mapStateToProps = state => ({ ...state.configs })

const mapDispatchToProps = (dispatch) => ({
  toggleActive: () => {
    dispatch({ type: 'TOGGLE_ACTIVE' })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Configs)
