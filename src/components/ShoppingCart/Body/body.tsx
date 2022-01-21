import { Button, Grid, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { IProductDataProps } from "../../../@types/products";
import Header from "../../HomePage/Header/header";

export default function Body() {
  const [shoppingCart, setShoppingCart] = useState<Array<IProductDataProps>>(
    []
  );
  useEffect(() => {
    let returnData = localStorage.getItem("shoppingCart");
    if (returnData) {
      setShoppingCart(JSON.parse(returnData));
    }
  }, []);
  const deleteItem = () => {};
  const deleteAllItems = () => {
    localStorage.removeItem("shoppingCart");
    window.location.reload();
  };
  const listItems = shoppingCart.map((items: any) => (
    <Grid>
      <Typography>{items.name}</Typography>
      <Button onClick={() => deleteItem()}>Delete</Button>
    </Grid>
  ));
  return (
    <>
      <Header />
      <Button
        variant="contained"
        color="primary"
        onClick={() => deleteAllItems()}
      >
        Delete all
      </Button>
      {listItems}
    </>
  );
}
