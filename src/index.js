import React from "react";
import ReactDOM from "react-dom";
import App from "./app/index";
import "bootstrap/dist/css/bootstrap.css";
import "./public/scss/main.scss"

import { Provider } from "react-redux"
import store from "./app/store"
import { BrowserRouter as Router } from "react-router-dom";

var anchorPoint = document.getElementById("root");

var CombinedApp = (
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
);

ReactDOM.render(CombinedApp, anchorPoint);
