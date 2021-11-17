import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './styles/global-styles';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import { AuthDropdownProvider } from 'contexts/AuthDropdownContext';
import { MeContextProvider } from 'contexts/MeContext';
import { AuthProblemProvider } from 'contexts/AuthorizationProblemContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthDropdownProvider>
      <MeContextProvider>
        <AuthProblemProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Router>
              <App />
            </Router>
          </ThemeProvider>
        </AuthProblemProvider>
      </MeContextProvider>
    </AuthDropdownProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
