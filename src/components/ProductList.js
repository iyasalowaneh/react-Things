import products from "../products";

const ProductList = () => {
  const productArray = products.map((product) => (
    <div>
      <img className="image" src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.price} $</p>
    </div>
  ));
  return <div className="product-list">{productArray}</div>;
};

export default ProductList;
