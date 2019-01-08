import React from 'react'

import { connect } from 'react-redux'

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';

import { setInactiveNewRegion } from '../../actions/globalActions';

const ConfigsNewRegion = ({ setInactiveNewRegion }: any) => (
  <Paper elevation={0}>
    <Typography variant="h5" component="h3">
      New region configuration
      <CloseIcon
        style={{ float: 'right', margin: '10px' }}
        onClick={e => setInactiveNewRegion()}
      />
    </Typography>
    Selected region
  </Paper>
)

const mapStateToProps = (state: any): any => ({ global: state.global })

const mapDispatchToProps = {
  setInactiveNewRegion,
};

const component = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfigsNewRegion)

export default component;
