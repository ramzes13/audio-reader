import { connect } from 'react-redux'
import Configs from '../components/configs/Configs'
import { ReducersConfigStore } from '../reducers/configs';
import { ReducersInterface } from '../reducers';

const mapStateToProps = (state: ReducersInterface): ReducersConfigStore => ({ ...state.configs })

const mapDispatchToProps = (dispatch: any) => ({
  toggleActive: () => {
    dispatch({ type: 'TOGGLE_ACTIVE' })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Configs)
