import React from 'react'

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { RegionMetaInterface } from '../../index.t';
import { actions } from './index.t'

type Props = {
  region: RegionMetaInterface,
  selected: boolean,
  regionAction: (action: actions, data: RegionMetaInterface) => void;
};

class Region extends React.Component<Props, any> {

  handleClick(e: React.MouseEvent<HTMLElement>, action: actions, region: RegionMetaInterface) {
    e.stopPropagation();
    this.props.regionAction(action, region);
  }

  render() {
    const { region, regionAction: regionAction, selected } = this.props;
    return (
      <Grid
        onClick={(e => this.handleClick(e, 'select', region))}
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      >
        {region.readMeta.label}
        {selected ?
          <div>
            <Button variant="outlined" size="small" onClick={(e => this.handleClick(e, 'edit', region))}>Edit</Button>
            <Button variant="outlined" size="small" onClick={(e => this.handleClick(e, 'train', region))}>Train</Button>
          </div>
          : ''}
      </Grid>
    )
  }
}

export default Region;