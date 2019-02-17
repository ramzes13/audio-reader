import React from 'react'
import { connect } from 'react-redux'

import { handleSaveRegion, cancelRegionEdit } from '../../actions/regionsActions';
import { ReducersConfigInterface } from '../../reducers/index.t';
import { RegionMetaInterface } from '../../index.t';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

interface DispatchProps {
  cancelRegionEdit: () => void;
  handleSaveRegion: (region: RegionMetaInterface) => void;
}

type Props = DispatchProps & ReducersConfigInterface;

const ConfigsRegion = ({ cancelRegionEdit, region, handleSaveRegion }: Props) => (
  <Paper elevation={0}>
    <Typography variant="h5" component="h3">
      {region.id ? `Edit region ${region.id}` : 'New region configuration'}
    </Typography>
    Selected region: {region && region.readMeta && region.readMeta.label}
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="flex-start"
    >
      <Button
        variant="outlined"
        size="small"
        onClick={e => cancelRegionEdit()}
      >
        Close
      </Button>
      <Button
        variant="outlined"
        size="small"
        onClick={e => handleAddNewRegion(region, handleSaveRegion)}
      >
        Save
      </Button>
    </Grid>
  </Paper>
)

const mapStateToProps = (state: any): any => ({ ...state.configs, global: state.global })

const mapDispatchToProps = {
  handleSaveRegion,
  cancelRegionEdit,
};

const component = connect<ReducersConfigInterface, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(ConfigsRegion)

function handleAddNewRegion(regionData: RegionMetaInterface, handleSaveRegion: any) {
  //todo some validations 
  if (!regionData) {
    return;
  }

  handleSaveRegion(regionData);
}
export default component;
