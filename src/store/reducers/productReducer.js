//actions
import * as actionTypes from "../actions/types";

const initialState = {
  products: [],
  loading: true,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DELETE_PRODUCT:
      const productsToKeep = state.products.filter(
        (product) => product.id !== action.payload.productId
      );
      return {
        ...state,
        products: productsToKeep,
      };

    case actionTypes.CREATE_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload.newProduct],
      };

    case actionTypes.UPDATE_PRODUCT:
      const { updateProduct } = action.payload;

      return {
        ...state,
        products: state.products.map((product) =>
          product.id === updateProduct.id ? updateProduct : product
        ),
      };
    case actionTypes.FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default productReducer;
