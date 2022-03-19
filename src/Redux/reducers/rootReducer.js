import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { detailReducer } from "./detailReducer";
import { authReducer } from "./authReducer";

export const rootReducer = combineReducers({ productReducer, detailReducer, authReducer });
