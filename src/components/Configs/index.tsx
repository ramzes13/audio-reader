import React from 'react'
import classNames from 'classnames';
import { connect } from 'react-redux'

import Fab from '@material-ui/core/Fab';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { ReducersConfigStore } from '../../reducers/configs';
import { ReducersInterface } from '../../reducers';
import { actions } from '../../actions';
import styles from './styles';

class Configs extends React.Component<any, any>{

  constructor(props: any) {
    super(props);
    this.state = {
      open: false,
    }
  }

  toggleDrawer(open: any) {
    this.setState({ open });
  }
  render() {
    const { classes } = this.props;

    return (
      <div>
        <SwipeableDrawer
          open={this.state.open}
          onClose={e => this.toggleDrawer(false)}
          onOpen={e => this.toggleDrawer(true)}
        >
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </SwipeableDrawer>
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

const mapStateToProps = (state: ReducersInterface): ReducersConfigStore => ({ ...state.configs })

const mapDispatchToProps = (dispatch: any) => ({
  toggleActive: () => {
    dispatch({ type: actions.CONF_TOGGLE })
  }
})

const component = connect(
  mapStateToProps,
  mapDispatchToProps
)(Configs)

export default styles(component);
