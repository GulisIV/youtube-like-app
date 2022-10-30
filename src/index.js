import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import rootSaga from "./redux/sagas/rootSaga";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store, sagaMiddleware } from "./redux/store/connect";

sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter basename="/">
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);
