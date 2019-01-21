import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import state from './state';
import './index.css';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/blueGrey';
import green from '@material-ui/core/colors/green';
import CssBaseline from '@material-ui/core/CssBaseline';
// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
  typography: {
    useNextVariants: true,
  },
});

import App from './components/App'
import rootReducer from './reducers'
/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  state as any,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */
render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
)
