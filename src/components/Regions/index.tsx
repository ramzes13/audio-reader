import React from 'react';
import { connect } from 'react-redux'

import { ReducersGlobal, ReducersRegionsRegions } from '../../reducers/index.t';
import { toggleActive } from '../../actions/regionsActions';

import UiGenericContainer from '../../ui/GenericComponent';

interface DispatchProps {
  toggleActive: () => void;
}

type Props = ReducersGlobal & ReducersRegionsRegions & DispatchProps;
type State = ReducersGlobal & ReducersRegionsRegions;

class Regions extends React.Component<Props, any> {
  render() {
    return (
      <UiGenericContainer active={this.props.active} toggleActive={this.props.toggleActive}>
        regions
      </UiGenericContainer>
    )
  }
}

const mapStateToProps = (state: any): State => ({ ...state.global, ...state.regions })

const mapDispatchToProps = {
  toggleActive,
};

export default connect<State, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(Regions)