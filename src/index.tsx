import {store} from "./redux/store";
import './index.css'
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import App from "./App";
import React from "react";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>, document.getElementById('root'))







