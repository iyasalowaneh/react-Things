import { DetailWrapper } from "../styles";
import { Image } from "../styles";
import DeleteButton from "../components/buttons/DeleteButton";

const ProductDetail = (props) => {
  return (
    <DetailWrapper product={props.product}>
      <h1>{props.product.name}</h1>
      <Image src={props.product.image} alt={props.product.name} />
      <p>{props.product.description}</p>
      <p>{props.product.price}</p>
      <button onClick={() => props.setCrrrentProduct(null)}>Go Back</button>
      <DeleteButton
        deleteProduct={props.deleteProduct}
        productID={props.product.id}
      />
    </DetailWrapper>
  );
};

export default ProductDetail;
