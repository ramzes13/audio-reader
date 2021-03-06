import React from 'react'
import classNames from 'classnames';
import { connect } from 'react-redux'

import Fab from '@material-ui/core/Fab';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { ReducersConfigInterface } from '../../reducers/index.t';
import { toggleActive } from '../../actions/configActions';
import { beginCreateNewRegion } from '../../actions/regionsActions';
import styles from './styles';
import ConfigsRegion from './ConfigsRegion';

interface DispatchProps {
  toggleActive: () => void;
  beginCreateNewRegion: () => void;
}
class Configs extends React.Component<any, any>{

  constructor(props: any) {
    super(props);
    this.state = {
      open: false,
    }
  }
  displayNewRegion() {
    this.toggleDrawer(false)
    this.props.beginCreateNewRegion()
  }
  toggleDrawer(open: boolean) {
    this.setState({ open });
  }
  render() {
    const { classes } = this.props;
    const newRegion = "New region";
    let content;
    if (this.props.global.activeNewRegion) {
      content = <ConfigsRegion />;
    }
    return (
      <div>
        <SwipeableDrawer
          open={this.state.open}
          onClose={e => this.toggleDrawer(false)}
          onOpen={e => this.toggleDrawer(true)}
        >
          <List>
            <ListItem
              onClick={e => this.displayNewRegion()}
              button key={newRegion}
            >
              <ListItemIcon>{<InboxIcon />}</ListItemIcon>
              <ListItemText primary={newRegion} />
            </ListItem>
          </List>
        </SwipeableDrawer>
        {content}
        <Fab
          onClick={e => this.toggleDrawer(true)}
          size="small"
          className={classNames(classes.fab, classes.fabMenu)}
        >
          <MenuIcon />
        </Fab>
      </div>
    )
  };
}

const mapStateToProps = (state: any): ReducersConfigInterface => ({ ...state.configs, global: state.global })

const mapDispatchToProps = {
  toggleActive,
  beginCreateNewRegion,
};

const component = connect<ReducersConfigInterface, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(Configs)

export default styles(component);
