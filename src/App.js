import React, { useState } from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/cartProvider";

function App() {
  const [isShowCart, setIsShowCart] = useState(false);

  const ShowCartHandler = () => {
    setIsShowCart(true);
  };

  const HideCartHandler = () => {
    setIsShowCart(false);
  };

  return (
    <CartProvider>
      {isShowCart && <Cart onHide={HideCartHandler} />}
      <Header OnShowCart={ShowCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
