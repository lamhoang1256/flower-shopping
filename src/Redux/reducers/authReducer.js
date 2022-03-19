import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL } from "../constants/authConstants";

const dataRegister = null;
export const authReducer = (state = { dataRegister }, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { loading: true, dataRegister: [] };
    case REGISTER_SUCCESS:
      return { loading: false, dataRegister: action.payload };
    case REGISTER_FAIL:
      return { loading: false, dataRegister: action.payload };
    default:
      return state;
  }
};
