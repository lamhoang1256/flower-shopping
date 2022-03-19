import { combineReducers } from "redux";
import { productReducer } from "./productListReducer";

export const rootReducer = combineReducers({ productReducer });
