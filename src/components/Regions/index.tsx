import React from 'react'
import { connect } from 'react-redux'

import Region from './Region'
import { ReducersGlobal, ReducersRegionsRegions } from '../../reducers/index.t'
import { RegionMetaInterface } from '../../index.t';
import { toggleActive } from '../../actions/regionsActions'

import UiGenericContainer from '../../ui/GenericComponent'

interface DispatchProps {
  toggleActive: () => void;
}

type State = ReducersGlobal & ReducersRegionsRegions;
type Props = ReducersGlobal & ReducersRegionsRegions & DispatchProps;

class Regions extends React.Component<Props, any> {
  regionClick(region: RegionMetaInterface) {
    console.log('region click', region);
  }
  render() {
    return (
      <UiGenericContainer active={this.props.active} toggleActive={this.props.toggleActive}>
        {this.props.regions.map((region, i) => {
          return (<Region key={i} region={region} regionClick={this.regionClick} />)
        })}
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