import productData from "../products";

import slugify from "slugify";

//actions
import { DELETE_PRODUCT } from "./actions";
import { CREATE_PRODUCT } from "./actions";
import { UPDATE_PRODUCT } from "./actions";
import { FETCH_PRODUCTS } from "./actions";
const initialState = {
  products: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_PRODUCT:
      const productsToKeep = state.products.filter(
        (product) => product.id !== action.payload.productId
      );
      return {
        ...state,
        products: productsToKeep,
      };

    case CREATE_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload.newProduct],
      };

    case UPDATE_PRODUCT:
      const { updateProduct } = action.payload;

      return {
        ...state,
        products: state.products.map((product) =>
          product.id === updateProduct.id ? updateProduct : product
        ),
      };
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
