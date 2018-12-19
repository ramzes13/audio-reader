import { connect } from 'react-redux'
import Configs from '../components/configs/Configs'

const mapStateToProps = (state: any) => ({ ...state.configs })

const mapDispatchToProps = (dispatch: any) => ({
  toggleActive: () => {
    dispatch({ type: 'TOGGLE_ACTIVE' })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Configs)
