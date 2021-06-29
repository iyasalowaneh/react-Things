import { useState } from "react";
import { useSelector } from "react-redux";
import PacmanLoader from "react-spinners/PacmanLoader"; //Styling
import "./App.css";

//ProductList components
import NavProduct from "./components/NavProduct ";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle, ThemeButton } from "./styles";

import Routes from "./components/Routes";
function App() {
  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);
  const loadingShops = useSelector((state) => state.shops.loading);

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
      <NavProduct />
      {loading || loadingShops ? (
        <PacmanLoader />
      ) : (
        <Routes products={products} />
      )}
    </ThemeProvider>
  );
}

export default App;
