import products from "./products";

import "./App.css";

function App() {
  const productArray = products.map((product) => (
    <div>
      <img className="image" src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.price} $</p>
    </div>
  ));
  return (
    <div>
      <h className="app-header">Things</h>
      <p className="app">i love my website</p>
      <img
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-688899881-1519413300.jpg"
        alt="NYC"
      />

      <div className="product-list">{productArray}</div>
    </div>
  );
}

export default App;
