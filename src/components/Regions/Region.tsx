import React from 'react'

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { RegionMetaInterface } from '../../index.t';

type Props = {
  region: RegionMetaInterface,
  selected: boolean,
  regionClick: (data: RegionMetaInterface) => void;
};
const Region = ({ region, regionClick, selected }: Props, state: any) => (
  <Grid
    onClick={(e => regionClick(region))}
    container
    direction="row"
    justify="space-between"
    alignItems="flex-start"
  >
    {region.readMeta.label}
    {selected ?
      <div>
        <Button variant="outlined" size="small">Edit</Button>
        <Button variant="outlined" size="small">Train</Button>
      </div>
      : ''}
  </Grid>
);

export default Region;