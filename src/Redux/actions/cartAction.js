import {
  ADD_CART_SUCCESS,
  ADD_CART_FAIL,
  REMOVE_CART_SUCCESS,
  REMOVE_CART_FAIL,
} from "../constants/cartConstants";

export const cartAction = (product) => (dispatch, getState) => {
  try {
    dispatch({ type: ADD_CART_SUCCESS, payload: product });
    localStorage.setItem("cart", JSON.stringify(getState().cartReducer.cartItems));
  } catch (err) {
    dispatch({
      type: ADD_CART_FAIL,
      payload: err.response && err.response.data.message ? err.response.data.message : err.message,
    });
  }
};

export const removeCartAction = (idProduct) => (dispatch, getState) => {
  try {
    dispatch({ type: REMOVE_CART_SUCCESS, payload: idProduct });
    localStorage.setItem("cart", JSON.stringify(getState().cartReducer.cartItems));
  } catch (err) {
    dispatch({
      type: REMOVE_CART_FAIL,
      payload: err.response && err.response.data.message ? err.response.data.message : err.message,
    });
  }
};
