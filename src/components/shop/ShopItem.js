import { Image } from "../../styles";
import { Link } from "react-router-dom";
// import DeleteButton from "../buttons/DeleteButton";
const ShopsItem = (props) => {
  const shop = props.shop;
  return (
    <div>
      {/* <UpdateButtonStyled to={`/shops/${shop.slug}/edit`}>
        Update shop
      </UpdateButtonStyled> */}
      <Link to={`/shops/${shop.slug}`}>
        <Image src={shop.image} alt={shop.name} />
      </Link>
      <h1>{shop.name}</h1>
      {/* <p>{shop.price} $</p>
      <DeleteButton shopId={shop.id} /> */}
    </div>
  );
};

export default ShopsItem;
