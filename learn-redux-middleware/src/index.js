import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import rootReducer from "./modules";
import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(logger, ReduxThunk));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
