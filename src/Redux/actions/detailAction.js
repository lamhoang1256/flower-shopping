import axios from "axios";
import { DETAIL_REQUEST, DETAIL_FAIL, DETAIL_SUCCESS } from "../constants/detailConstants";

export const detailProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: DETAIL_REQUEST });
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({ type: DETAIL_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: DETAIL_FAIL,
      payload: err.response && err.response.data.message ? err.response.data.message : err.message,
    });
  }
};
