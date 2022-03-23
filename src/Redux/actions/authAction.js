import axios from "axios";
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_USER,
} from "../constants/authConstants";

export const registerAction = (dataDispatch) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_REQUEST });
    const { data } = await axios.post("/api/users", dataDispatch, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch({ type: REGISTER_SUCCESS, payload: data });
    window.location.replace("/login");
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
      payload: err.response && err.response.data.message ? err.response.data.message : err.message,
    });
  }
};

export const loginAction = (info) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const { data } = await axios.post("/api/users/login", info, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch({ type: LOGIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
    window.location.replace("/");
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response && err.response.data.message ? err.response.data.message : err.message,
    });
  }
};

export const logoutAction = async (dispatch) => {
  try {
    console.log("logout action");
    dispatch({ type: LOGOUT_USER });
    localStorage.removeItem("userInfo");
    localStorage.removeItem("cart");
    localStorage.removeItem("shipping");
  } catch (err) {
    console.log(err);
  }
};
