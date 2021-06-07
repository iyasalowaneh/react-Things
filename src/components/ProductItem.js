import { Image } from "../styles";
import DeleteButton from "./buttons/DeleteButton";

const ProductItem = (props) => {
  return (
    <div>
      <Image
        onClick={() => props.setCrrrentProduct(props.product)}
        src={props.product.image}
        alt={props.product.name}
      />
      <h1>{props.product.name}</h1>
      <p>{props.product.price} $</p>
      <DeleteButton
        deleteProduct={props.deleteProduct}
        productID={props.product.id}
      />
    </div>
  );
};
export default ProductItem;
