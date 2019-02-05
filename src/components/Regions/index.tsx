import React from 'react'
import { connect } from 'react-redux'

import Region from './Region'
import { toggleActive, regionSelected, regionEdit } from '../../actions/regionsActions'

import { ReducersGlobal, ReducersRegionsRegions } from '../../reducers/index.t'
import { RegionMetaInterface } from '../../index.t'
import { actions } from './index.t'

import UiGenericContainer from '../../ui/GenericComponent'

interface DispatchProps {
  toggleActive: () => void;
  regionSelected: (region: RegionMetaInterface) => void;
  regionEdit: (region: RegionMetaInterface) => void;
}

type State = ReducersGlobal & ReducersRegionsRegions;
type Props = ReducersGlobal & ReducersRegionsRegions & DispatchProps;

class Regions extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);
    this.regionAction = this.regionAction.bind(this);
  }

  regionAction(action: actions, region: RegionMetaInterface) {
    console.log('region click', region);
    switch (action) {
      case 'select':
        this.props.regionSelected(region);
        break;
      case 'edit':
        this.props.regionEdit(region);
        break;
      case 'train':
        break;
    }

  }
  render() {
    const selectedRegionId = this.props.selectedRegionId;

    return (
      <UiGenericContainer active={this.props.active} toggleActive={this.props.toggleActive}>
        {this.props.regions.map((region, i) => {
          const selected = region.id === selectedRegionId;

          return (<Region key={region.id} selected={selected} region={region} regionAction={this.regionAction} />)
        })}
      </UiGenericContainer>
    )
  }
}

const mapStateToProps = (state: any): State => ({ ...state.global, ...state.regions })

const mapDispatchToProps = {
  toggleActive,
  regionSelected,
  regionEdit,
};

export default connect<State, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(Regions)