import { ColorModeScript } from "@chakra-ui/react"
import * as React from "react"
import ReactDOM from "react-dom"
import { App } from "./App"
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/Reducers/IndexReducer';
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  // you can also just use 'bottom center'
  position: positions.MIDDLE,
  timeout: 5000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
};


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter scrollRestoration="auto">
        <AlertProvider template={AlertTemplate} {...options}>
          <ColorModeScript />
          <App />
        </AlertProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
)
