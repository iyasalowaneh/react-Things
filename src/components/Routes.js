import { Route, Switch } from "react-router";
//Home components
import Home from "./Home";
import FormProduct from "./FormProduct ";
//ProductList components
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import ShopList from "./shop/ShopList";
import ShopDetail from "./shop/ShopDetail";

function Routes(props) {
  return (
    <Switch>
      <Route
        path={["/shops/:shopSlug/products/new", "/products/:productSlug/edit"]}
      >
        <FormProduct />
      </Route>
      <Route exact path="/products/:productSlug">
        <ProductDetail />
      </Route>
      <Route exact path="/shops/:shopSlug">
        <ShopDetail />
      </Route>
      <Route path="/products">
        <ProductList products={props.products} />
      </Route>
      <Route path="/shops">
        <ShopList />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}
export default Routes;
