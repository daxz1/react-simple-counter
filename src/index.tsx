import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import {createMuiTheme, MuiThemeProvider, responsiveFontSizes} from "@material-ui/core";
import { App } from './App';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

ReactDOM.render(
  <StrictMode>
      <MuiThemeProvider theme={theme}>
          <App />
      </MuiThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);

