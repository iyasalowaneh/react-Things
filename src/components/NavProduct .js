import { Link } from "react-router-dom";
import { Logo, NavProducts } from "../styles";
const NavProduct = () => {
  return (
    <div className="topnav">
      <Logo to="/">Things</Logo>
      <Link to="/">Home</Link>
      <NavProducts to="/products">Products</NavProducts>
      <NavProducts to="/shops">Shops</NavProducts>
    </div>
  );
};
export default NavProduct;
