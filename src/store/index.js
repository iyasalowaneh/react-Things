import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";
import { fetchProducts } from "./actions";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer, // reducer function
  composeEnhancers(applyMiddleware(thunk))
);
store.dispatch(fetchProducts());

export default store;
