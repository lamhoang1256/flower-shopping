import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from "../constants/productConstants";

const dataProducts = [];
export const productReducer = (state = { dataProducts }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, dataProducts: [] };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, dataProducts: action.payload };
    case PRODUCT_LIST_FAIL:
      return { loading: false, dataProducts: action.payload };
    default:
      return state;
  }
};
