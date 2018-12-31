import green from '@material-ui/core/colors/green';

import { withStyles } from '@material-ui/core/styles';

const styles = (theme: any) => ({
  fab: {
    margin: '0px',
    top: 'auto',
    right: '10px',
    bottom: '10px',
    left: 'auto',
    position: 'fixed' as 'fixed',
  },
  fabMenu: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
  },
});

export default (component: any) => {
  return withStyles(styles, { withTheme: true })(component);
}