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
const Region = ({ region, regionAction: regionAction, selected }: Props, state: any) => (
  <Grid
    onClick={(e => regionAction('select', region))}
    container
    direction="row"
    justify="space-between"
    alignItems="flex-start"
  >
    {region.readMeta.label}
    {selected ?
      <div>
        <Button variant="outlined" size="small" onClick={(e => regionAction('edit', region))}>Edit</Button>
        <Button variant="outlined" size="small" onClick={(e => regionAction('train', region))}>Train</Button>
      </div>
      : ''}
  </Grid>
);

export default Region;