import { DetailWrapper } from "../styles";
import { Image } from "../styles";
import DeleteButton from "../components/buttons/DeleteButton";
import { Redirect, useParams } from "react-router-dom";

const ProductDetail = (props) => {
  const productSlug = useParams().productSlug;
  const product = props.products.find(
    (product) => product.slug === productSlug
  );
  if (!product) return <Redirect to="/" />;

  return (
    <DetailWrapper product={props.products}>
      <h1>{product.name}</h1>
      <Image src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button onClick={() => props.setCrrrentProduct(null)}>Go Back</button>
      <DeleteButton
        deleteProduct={props.deleteProduct}
        productID={product.id}
      />
    </DetailWrapper>
  );
};

export default ProductDetail;
