import { Image, UpdateButtonStyled } from "../styles";
import { Link } from "react-router-dom";
import DeleteButton from "./buttons/DeleteButton";
const ProductItem = (props) => {
  const product = props.product;
  return (
    <div>
      <UpdateButtonStyled to={`/products/${product.slug}/edit`}>
        Update product
      </UpdateButtonStyled>
      <Link to={`/products/${product.slug}`}>
        <Image src={product.image} alt={product.name} />
      </Link>
      <h1>{product.name}</h1>
      <p>{product.price} $</p>
      <DeleteButton productId={product.id} />
    </div>
  );
};

export default ProductItem;
