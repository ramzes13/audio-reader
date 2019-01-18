import React from 'react'

import { RegionMetaInterface } from '../../index.t';

type Props = {
  region: RegionMetaInterface,
  regionClick: (data: RegionMetaInterface) => void;
};
const Region = ({ region, regionClick }: Props) => (
  <div onClick={(e => regionClick(region))}>
    {JSON.stringify(region)}
  </div>
);

export default Region;