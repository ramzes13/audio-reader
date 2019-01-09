import React from 'react'

import { connect } from 'react-redux'

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';

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
      <CloseIcon
        style={{ float: 'right', margin: '10px' }}
        onClick={e => setInactiveNewRegion()}
      />
    </Typography>
    Selected region: {region && region.read && region.read.label}
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
