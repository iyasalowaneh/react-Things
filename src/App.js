import { useState } from "react";

//Styling
import "./App.css";
//Home components
import Home from "./components/Home";
//ProductList components
import ProductList from "./components/ProductList";

import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle, ThemeButton } from "./styles";
import ProductDetail from "./components/ProductDetail";
import products from "./products";
function App() {
  const [_products, setProducts] = useState(products);

  const deleteProduct = (productId) => {
    let filterdProduct = _products.filter(
      (product) => product.id !== productId
    );
    setProducts(filterdProduct);
  };

  const [crrrentProduct, setCrrrentProduct] = useState(null);
  const [currentTheme, setCurrentTheme] = useState("light");
  const ToggleCurrentTheme = () => {
    if (currentTheme === "light") {
      setCurrentTheme("dark");
    } else setCurrentTheme("light");
  };
  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ThemeButton onClick={ToggleCurrentTheme}>
        {currentTheme === "light" ? "Dark Mode" : "Light Mode"}
      </ThemeButton>
      <Home />
      {crrrentProduct ? (
        <ProductDetail
          product={crrrentProduct}
          setCrrrentProduct={setCrrrentProduct}
          products={_products}
          deleteProduct={deleteProduct}
        />
      ) : (
        <ProductList
          setCrrrentProduct={setCrrrentProduct}
          products={_products}
          deleteProduct={deleteProduct}
        />
      )}
    </ThemeProvider>
  );
}

export default App;
