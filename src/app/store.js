import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import reducers from "./reducer";

const loggerOptions = { collapsed: true };
const logger = createLogger(loggerOptions);

var store = compose(
    applyMiddleware(thunk, logger),
)(createStore)(reducers);

export default store;
