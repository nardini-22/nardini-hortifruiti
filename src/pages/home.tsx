import Body from "../components/HomePage/Body/body";
import Header from "../components/HomePage/Header/header";

export default function Home({setShoppingCart, shoppingCart}: any) {
  return (
    <>
      <Header />
      <Body setShoppingCart={setShoppingCart} shoppingCart={shoppingCart}/>
    </>
  );
}
