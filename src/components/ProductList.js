import { useState } from "react";
import { Link } from "react-router-dom";
// Styling
//import { ListWrapper } from "../styles";
//components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";

// products
//import products from "../products";
// Styling
import { List } from "../styles";

import { useSelector } from "react-redux";

const ProductList = () => {
  const [query, setQuery] = useState("");
  const products = useSelector((state) => state.products);

  let productArray = products
    .filter((product) =>
      product.name.toUpperCase().includes(query.toUpperCase())
    )
    .map((product) => <ProductItem product={product} key={product.id} />);
  return (
    <div>
      <Link to="/products/form">Add a Product</Link>
      <SearchBar setQuery={setQuery} />
      <List>{productArray}</List>
    </div>
  );
};

export default ProductList;
