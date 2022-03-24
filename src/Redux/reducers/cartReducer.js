import { ADD_CART_SUCCESS, REMOVE_CART_SUCCESS, CLEAR_CART } from "../constants/cartConstants";

const initialState = JSON.parse(localStorage.getItem("cart")) || [];
export const cartReducer = (state = { cartItems: initialState }, action) => {
  switch (action.type) {
    case ADD_CART_SUCCESS:
      const productAdded = action.payload;
      let existItem = state.cartItems.find((item) => item._id === productAdded._id);
      // product has added to cart
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item._id === productAdded._id ? productAdded : item
          ),
        };
        // product no has in cart
      } else {
        return { ...state, cartItems: [...state.cartItems, productAdded] };
      }
    case REMOVE_CART_SUCCESS:
      const idProduct = action.payload;
      return { ...state, cartItems: state.cartItems.filter((x) => x._id !== idProduct) };
    case CLEAR_CART:
      return { ...state, cartItems: [] };
    default:
      return state;
  }
};
