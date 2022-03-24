import {
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_FAIL,
  ORDER_DETAIL_REQUEST,
  ORDER_DETAIL_SUCCESS,
  ORDER_DETAIL_FAIL,
} from "../constants/orderConstants";

export const orderReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return { loading: true, success: false };
    case ORDER_CREATE_SUCCESS:
      return { loading: false, success: true };
    case ORDER_CREATE_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};

export const orderDetailReducer = (state = { orderDetail: [] }, action) => {
  switch (action.type) {
    case ORDER_DETAIL_REQUEST:
      return { loading: true, success: false };
    case ORDER_DETAIL_SUCCESS:
      return { loading: false, success: true, orderDetail: action.payload };
    case ORDER_DETAIL_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};
