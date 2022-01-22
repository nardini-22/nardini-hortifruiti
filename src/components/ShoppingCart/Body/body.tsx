import {
  Button,
  ButtonGroup,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import {
  IProductDataProps,
  IShoppingCartProps,
} from "../../../@types/products";
import { bodyStyles } from "./bodyStyles";

export default function Body() {
  const [shoppingCart, setShoppingCart] = useState<Array<IProductDataProps>>(
    []
  );
  const [quantity, setQuantity] = useState<any>();
  useEffect(() => {
    let returnData = localStorage.getItem("shoppingCart");
    if (returnData) {
      setShoppingCart(JSON.parse(returnData));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  }, [shoppingCart]);

  const deleteItem = (items: any) => {
    let hardCopy = [...shoppingCart];
    hardCopy = hardCopy.filter((listItems) => listItems.id !== items.id);
    setShoppingCart(hardCopy);
  };
  const deleteAllItems = () => {
    localStorage.removeItem("shoppingCart");
    window.location.reload();
  };
  const classes = bodyStyles();
  const listItems = shoppingCart.map((items: any) => (
    <Grid container className={classes.listItems}>
      <Grid item md={3}>
        <Typography>{items.name}</Typography>
      </Grid>
      <Grid item md={3}>
        <Typography>{`U$${(items.price * items.qty).toFixed(2)}`}</Typography>
      </Grid>
      <Grid item md={3} className={classes.inputContainer}>
        <Typography>Qty: </Typography>
        <input
          className={classes.input}
          type="number"
          defaultValue={1}
          min={1}
          onChange={(e) => setQuantity((items.qty = e.target.value))}
        />
      </Grid>
      <Grid item md={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => deleteItem(items)}
        >
          Delete
        </Button>
      </Grid>
    </Grid>
  ));
  return (
    <>
      {listItems}
      <ButtonGroup className={classes.buttonGroup}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => deleteAllItems()}
        >
          Delete all
        </Button>
      </ButtonGroup>
    </>
  );
}
