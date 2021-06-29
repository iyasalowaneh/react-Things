import { DetailWrapper } from "../styles";
import { Image } from "../styles";
import { Redirect, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import DeleteButton from "./buttons/DeleteButton";
const ProductDetail = (props) => {
  const products = useSelector((state) => state.products.products);

  const productSlug = useParams().productSlug;
  const product = products.find((product) => product.slug === productSlug);
  if (!product) return <Redirect to="/" />;

  return (
    <DetailWrapper>
      <h1>{product.name}</h1>
      <Image src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button onClick={() => props.setCrrrentProduct(null)}>Go Back</button>
      <DeleteButton productID={product.id} />
    </DetailWrapper>
  );
};

export default ProductDetail;
