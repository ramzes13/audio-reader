import React from 'react'

import { connect } from 'react-redux'

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { setInactiveNewRegion } from '../../actions/globalActions';
import { ReducersConfigInterface } from '../../reducers/configs';

interface DispatchProps {
  setInactiveNewRegion: () => void;
}

type Props = DispatchProps & ReducersConfigInterface;

const ConfigsNewRegion = ({ setInactiveNewRegion, region }: Props) => (
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
      >
        Save
      </Button>
    </Grid>
  </Paper>
)

const mapStateToProps = (state: any): any => ({ ...state.configs, global: state.global })

const mapDispatchToProps = {
  setInactiveNewRegion,
};

const component = connect<ReducersConfigInterface, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(ConfigsNewRegion)

export default component;
