import { useState } from "react";
// import { Link } from "react-router-dom";
//components
import ShopItem from "./ShopItem";
import SearchBar from "../SearchBar";

// Styling
import { List } from "../../styles";

import { useSelector } from "react-redux";

const ShopList = () => {
  const [query, setQuery] = useState("");
  const shops = useSelector((state) => state.shops.shops);

  let shopArray = shops
    .filter((shop) => shop.name.toUpperCase().includes(query.toUpperCase()))
    .map((shop) => <ShopItem shop={shop} key={shop.id} />);
  return (
    <div>
      {/* <Link to="/shops/form">Add a Shop</Link> */}
      <SearchBar setQuery={setQuery} />
      <List>{shopArray}</List>
    </div>
  );
};

export default ShopList;
