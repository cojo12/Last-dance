import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {StoreProvider} from "./utils/GlobalState";
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
<StoreProvider><App /></StoreProvider>, document.getElementById("root")
);