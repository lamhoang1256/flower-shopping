import axios from "axios";
import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL } from "../constants/authConstants";

export const registerAction = (info) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_REQUEST });
    const { data } = await axios.post("/api/users", info);
    dispatch({ type: REGISTER_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
      payload: err.response && err.response.data.message ? err.response.data.message : err.message,
    });
  }
};
