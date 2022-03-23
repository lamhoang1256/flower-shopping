import axios from "axios";
import {
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  SHIPPING_SAVE,
} from "../constants/userConstants";

export const updateAction = (dataDispatch, token) => async (dispatch) => {
  try {
    dispatch({ type: USER_UPDATE_REQUEST });
    const { data } = await axios.put("/api/users/profile", dataDispatch, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (err) {
    dispatch({
      type: USER_UPDATE_FAIL,
      payload: err.response && err.response.data.message ? err.response.data.message : err.message,
    });
  }
};

export const shippingAction = (data) => (dispatch) => {
  dispatch({ type: SHIPPING_SAVE });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};
