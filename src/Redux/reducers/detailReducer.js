import { DETAIL_REQUEST, DETAIL_SUCCESS, DETAIL_FAIL } from "../constants/detailConstants";

export const detailReducer = (state = { dataDetail: [] }, action) => {
  switch (action.type) {
    case DETAIL_REQUEST:
      return { loading: true, dataDetail: [] };
    case DETAIL_SUCCESS:
      return { loading: false, dataDetail: action.payload };
    case DETAIL_FAIL:
      return { loading: false, dataDetail: action.payload };
    default:
      return state;
  }
};
