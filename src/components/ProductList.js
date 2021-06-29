import { useState } from "react";
//components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";

// Styling
import { List } from "../styles";

const ProductList = ({ products }) => {
  const [query, setQuery] = useState("");
  // const products = useSelector((state) => state.products.products);

  let productArray = products
    .filter((product) =>
      product.name.toUpperCase().includes(query.toUpperCase())
    )
    .map((product) => <ProductItem product={product} key={product.id} />);
  return (
    <div>
      {/* <Link to="/products/form">Add a Product</Link> */}
      <SearchBar setQuery={setQuery} />
      <List>{productArray}</List>
    </div>
  );
};

export default ProductList;
