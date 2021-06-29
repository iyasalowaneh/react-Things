import { combineReducers } from "redux";
import productReducer from "./productReducer";
import shopReduser from "./shopReduser";
const rootReducer = combineReducers({
  shops: shopReduser,
  products: productReducer,
});
export default rootReducer;
