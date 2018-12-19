import { connect } from 'react-redux'
import ReadingContainer from '../components/reading-container/ReadingContainer'

const mapStateToProps = (state: any) => ({ ...state.configs })

const mapDispatchToProps = (dispatch: any) => ({
  onChangeMeta: () => {
    dispatch({ type: 'TOGGLE_ACTIVE' })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReadingContainer)
