import { ThemeProvider } from "@material-ui/core";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ShoppingCart from "./pages/shoppingCart";
import { theme } from "./styles/global";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrinho" element={<ShoppingCart />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
