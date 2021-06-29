import axios from "axios";

import * as actionTypes from "./types";

export const fetchShops = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:8000/shops");
      dispatch({
        type: actionTypes.FETCH_SHOPS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
