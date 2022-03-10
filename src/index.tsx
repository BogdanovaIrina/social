import {store} from "./redux/store";
import './index.css'
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import App from "./App";
import React from "react";

ReactDOM.render(<Provider store={store} >
    <App/>
</Provider>, document.getElementById('root'));







