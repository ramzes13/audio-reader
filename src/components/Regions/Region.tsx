import React from 'react'

import Button from '@material-ui/core/Button';

import { RegionMetaInterface } from '../../index.t';

type Props = {
  region: RegionMetaInterface,
  selected: boolean,
  regionClick: (data: RegionMetaInterface) => void;
};
const Region = ({ region, regionClick, selected }: Props, state: any) => (
  <div onClick={(e => regionClick(region))}>
    {region.readMeta.label}
    {selected ?
      <>
        <Button variant="outlined" size="small">Edit</Button>
        <Button variant="outlined" size="small">Train</Button>
      </>
      : ''}
  </div>
);

export default Region;