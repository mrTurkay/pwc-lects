import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";

import AppThemeProvider from "./contexts/ThemeContext";
import { CssBaseline } from "@mui/material";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <AppThemeProvider>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </AppThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
