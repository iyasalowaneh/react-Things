import { DetailWrapper } from "../../styles";
import { Image } from "../../styles";
import { Redirect, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
// import DeleteButton from "../buttons/DeleteButton";
import { Link } from "react-router-dom";
import ProductList from "../ProductList";
const ShopDetail = (props) => {
  const shops = useSelector((state) => state.shops.shops);
  const products = useSelector((state) => state.products.products);

  const shopSlug = useParams().shopSlug;
  console.log(shopSlug);
  const shop = shops.find((shop) => shop.slug === shopSlug);
  const shopProducts = shop.products.map((product) =>
    products.find((_product) => _product.id === product.id)
  );

  if (!shop) return <Redirect to="/" />;

  return (
    <DetailWrapper>
      <Link to={`/shops/${shop.slug}/products/new`}>Add peoduct</Link>
      <h1>{shop.name}</h1>
      <Image src={shop.image} alt={shop.name} />
      <ProductList products={shopProducts} />
      {/* <button onClick={() => props.setCrrrentShop(null)}>Go Back</button>
      <DeleteButton shopID={shop.id} /> */}
    </DetailWrapper>
  );
};

export default ShopDetail;
