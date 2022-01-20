import { ThemeProvider } from "@material-ui/core";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ShoppingCart from "./pages/shoppingCart";
import { theme } from "./styles/global";

export default function App() {
  const [shoppingCart, setShoppingCart] = useState<any[]>([]);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setShoppingCart={setShoppingCart}
                shoppingCart={shoppingCart}
              />
            }
          />
          <Route
            path="/carrinho"
            element={
              <ShoppingCart
                shoppingCart={shoppingCart}
                setShoppingCart={setShoppingCart}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
