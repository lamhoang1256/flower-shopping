import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const { rootReducer } = require("./reducers/rootReducer");

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
