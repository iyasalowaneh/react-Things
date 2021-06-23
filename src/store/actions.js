import axios from "axios";

export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const deleteProduct = (productId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:8000/products/${productId}`);
      dispatch({
        type: DELETE_PRODUCT,
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
      const res = await axios.post("http://localhost:8000/products", formData);
      dispatch({
        type: CREATE_PRODUCT,
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
        type: UPDATE_PRODUCT,
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
        type: FETCH_PRODUCTS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
