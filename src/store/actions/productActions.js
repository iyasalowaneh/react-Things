import axios from "axios";
import * as actionTypes from "./types";

export const deleteProduct = (productId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:8000/products/${productId}`);
      dispatch({
        type: actionTypes.DELETE_PRODUCT,
        payload: {
          productId: productId,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createProduct = (newProduct) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in newProduct) {
        formData.append(key, newProduct[key]);
      }
      const res = await axios.post(
        `http://localhost:8000/shops/${newProduct.shopId}/products`,
        formData
      );
      dispatch({
        type: actionTypes.CREATE_PRODUCT,
        payload: {
          newProduct: res.data,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateProduct = (updateProduct) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in updateProduct) {
        formData.append(key, updateProduct[key]);
      }
      const res = await axios.put(
        `http://localhost:8000/products/${updateProduct.id}`,
        formData
      );
      dispatch({
        type: actionTypes.UPDATE_PRODUCT,
        payload: { updateProduct: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:8000/products");
      dispatch({
        type: actionTypes.FETCH_PRODUCTS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
