import { useState } from "react";
import { Route, Switch } from "react-router";

//Styling
import "./App.css";
//Home components
import Home from "./components/Home";
import FormProduct from "./components/FormProduct ";
//ProductList components
import ProductList from "./components/ProductList";
import NavProduct from "./components/NavProduct ";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle, ThemeButton } from "./styles";
import ProductDetail from "./components/ProductDetail";

function App() {
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
      <Switch>
        <Route path={["/products/form", "/products/:productSlug/edit"]}>
          <FormProduct />
        </Route>
        <Route exact path="/products/:productSlug">
          <ProductDetail />
        </Route>

        <Route path="/products">
          <ProductList />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
