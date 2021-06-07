import { useState } from "react";
// Styling
//import { ListWrapper } from "../styles";
//components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";

// products
//import products from "../products";
// Styling
import { List } from "../styles";

const ProductList = (props) => {
  const [query, setQuery] = useState("");

  let productArray = props.products
    .filter((product) =>
      product.name.toUpperCase().includes(query.toUpperCase())
    )
    .map((product) => (
      <ProductItem
        setCrrrentProduct={props.setCrrrentProduct}
        product={product}
        key={product.id}
        deleteProduct={props.deleteProduct}
      />
    ));
  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <List setProduct={props.setProduct}>{productArray}</List>
    </div>
  );
};

export default ProductList;
