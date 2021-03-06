import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { useHistory } from "react-router-dom";
//actions
import { createProduct } from "../store/actions/productActions";
import { updateProduct } from "../store/actions/productActions";

const FormProduct = () => {
  const shops = useSelector((state) => state.shops.shops);
  const productSlug = useParams().productSlug;
  const shopSlug = useParams().shopSlug;

  const products = useSelector((state) => state.products.products);
  const updatedProduct = products.find(
    (product) => product.slug === productSlug
  );
  const [product, SetProduct] = useState(
    updatedProduct
      ? updatedProduct
      : {
          shopId: shops.find((shop) => shop.slug === shopSlug).id,
          name: "",
          price: 0,
          description: "",
          image: "",
        }
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const handleChange = (event) => {
    SetProduct({ ...product, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (updatedProduct) dispatch(updateProduct(product));
    else dispatch(createProduct(product));
    history.push("/products");
  };
  const handleImage = (event) => {
    SetProduct({ ...product, image: event.target.files[0] });
  };
  return (
    <form onSubmit={handleSubmit}>
      form
      <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">
          Product Name
        </label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput"
          placeholder="Enter the product name"
          name="name"
          onChange={handleChange}
          value={product.name}
        />
      </div>
      <div class="mb-3">
        <label for="formGroupExampleInput2" class="form-label">
          Product Price
        </label>
        <input
          type="number"
          class="form-control"
          id="formGroupExampleInput2"
          placeholder="Enter the product price"
          name="price"
          onChange={handleChange}
          value={product.price}
        />
      </div>
      <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">
          Product Description
        </label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput"
          placeholder="Enter the product description"
          name="description"
          onChange={handleChange}
          value={product.description}
        />
      </div>
      <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">
          Product image
        </label>
        <input
          type="file"
          class="form-control"
          id="formGroupExampleInput"
          placeholder="Enter the product image"
          name="image"
          onChange={handleImage}
        />
      </div>
      <button type="submit">{updatedProduct ? "update" : "Submit"}</button>
    </form>
  );
};

export default FormProduct;
