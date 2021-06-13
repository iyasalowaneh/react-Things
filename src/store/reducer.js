import productData from "../products";

import slugify from "slugify";

//actions
import { DELETE_PRODUCT } from "./actions";
import { CREATE_PRODUCT } from "./actions";
import { UPDATE_PRODUCT } from "./actions";

const initialState = {
  products: productData,
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
      action.payload.newProduct.id = state.products.length + 1;
      action.payload.newProduct.slug = slugify(action.payload.newProduct.name);
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

    default:
      return state;
  }
};

export default reducer;
