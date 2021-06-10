import { Image } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import { Link } from "react-router-dom";

const ProductItem = (props) => {
  const product = props.product;
  return (
    <div>
      <Link to={`/products/${product.slug}`}>
        <Image src={product.image} alt={product.name} />
      </Link>
      <h1>{product.name}</h1>
      <p>{product.price} $</p>
      <DeleteButton
        deleteProduct={props.deleteProduct}
        productID={props.product.id}
      />
    </div>
  );
};
export default ProductItem;
