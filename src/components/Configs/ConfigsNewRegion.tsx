import React from 'react'
import { connect } from 'react-redux'

import { setInactiveNewRegion } from '../../actions/globalActions';
import { addRegion } from '../../actions/regionsActions';
import { ReducersConfigInterface } from '../../reducers/index.t';
import { RegionMetaInterface } from '../../index.t';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

interface DispatchProps {
  setInactiveNewRegion: () => void;
  addRegion: (region: RegionMetaInterface) => void;
}

type Props = DispatchProps & ReducersConfigInterface;

const ConfigsNewRegion = ({ setInactiveNewRegion, region, addRegion }: Props) => (
  <Paper elevation={0}>
    <Typography variant="h5" component="h3">
      New region configuration
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
        onClick={e => setInactiveNewRegion()}
      >
        Close
      </Button>
      <Button
        variant="outlined"
        size="small"
        onClick={e => handleAddNewRegion(region, addRegion)}
      >
        Save
      </Button>
    </Grid>
  </Paper>
)

const mapStateToProps = (state: any): any => ({ ...state.configs, global: state.global })

const mapDispatchToProps = {
  setInactiveNewRegion,
  addRegion,
};

const component = connect<ReducersConfigInterface, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(ConfigsNewRegion)

function handleAddNewRegion(regionData: RegionMetaInterface | undefined, addRegion: any) {
  //todo some validations 
  if (!regionData) {
    return;
  }

  const finalData: RegionMetaInterface = {
    readMeta: regionData.readMeta,
    id: '_' + Math.random().toString(36).substr(2, 9),
  }
  addRegion(finalData);
}
export default component;
