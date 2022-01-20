import { useEffect } from "react";

export default function ShoppingCart({ shoppingCart, setShoppingCart }: any) {
  useEffect(() => {
    setShoppingCart(window.localStorage.getItem("shoppingCart"));
  }, []);

  return (
    // shoppingCart.map((data:any) => (
    //     {data}
    // ))
    <button onClick={() => console.log(shoppingCart)}>eiwhihfwihfiwh</button>
  );
}
