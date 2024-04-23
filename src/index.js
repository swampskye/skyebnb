import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense>
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    </Suspense>
  </React.StrictMode>
);
