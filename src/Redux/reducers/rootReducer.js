import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { detailReducer } from "./detailReducer";
import { registerReducer } from "./authReducer";
import { loginReducer } from "./authReducer";

export const rootReducer = combineReducers({
  productReducer,
  detailReducer,
  registerReducer,
  loginReducer,
});
