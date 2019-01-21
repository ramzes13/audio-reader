import React from 'react'
import { connect } from 'react-redux'

import Region from './Region'
import { ReducersGlobal, ReducersRegionsRegions } from '../../reducers/index.t'
import { RegionMetaInterface } from '../../index.t';
import { toggleActive, regionSelected } from '../../actions/regionsActions'

import UiGenericContainer from '../../ui/GenericComponent'

interface DispatchProps {
  toggleActive: () => void;
  regionSelected: (region: RegionMetaInterface) => void;
}

type State = ReducersGlobal & ReducersRegionsRegions;
type Props = ReducersGlobal & ReducersRegionsRegions & DispatchProps;

class Regions extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);
    this.regionClick = this.regionClick.bind(this);
  }

  regionClick(region: RegionMetaInterface) {
    console.log('region click', region);
    this.props.regionSelected(region);
  }
  render() {
    const selectedRegionId = this.props.selectedRegionId;

    return (
      <UiGenericContainer active={this.props.active} toggleActive={this.props.toggleActive}>
        {this.props.regions.map((region, i) => {
          const selected = region.id === selectedRegionId;

          return (<Region key={region.id} selected={selected} region={region} regionClick={this.regionClick} />)
        })}
      </UiGenericContainer>
    )
  }
}

const mapStateToProps = (state: any): State => ({ ...state.global, ...state.regions })

const mapDispatchToProps = {
  toggleActive,
  regionSelected,
};

export default connect<State, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(Regions)