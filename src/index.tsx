import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Grid from '@material-ui/core/Grid';
import {　MuiThemeProvider　} from '@material-ui/core/styles'
import { theme } from '../src/style/theme'

ReactDOM.render(
  <React.StrictMode>
    <Grid>
      <MuiThemeProvider theme={theme}>
        <App />  
      </MuiThemeProvider>
    </Grid>
  </React.StrictMode>,
  document.getElementById('root')
);
