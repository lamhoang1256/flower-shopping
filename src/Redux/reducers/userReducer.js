import {
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  SHIPPING_SAVE,
} from "../constants/userConstants";

export const userReducer = (
  state = {
    userInfo: JSON.parse(localStorage.getItem("userInfo")) || null,
    shippingAddress: JSON.parse(localStorage.getItem("shippingAddress")) || null,
    paymentMethod: "Paypal",
  },
  action
) => {
  switch (action.type) {
    case USER_UPDATE_REQUEST:
      return { loading: true };
    case USER_UPDATE_SUCCESS:
      return { ...state, loading: false };
    case USER_UPDATE_FAIL:
      return { loading: false, errorMessenger: action.payload };
    default:
      return state;
  }
};
