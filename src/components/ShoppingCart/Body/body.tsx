import { Button, ButtonGroup, Grid, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import {
  IDeleteItemProps,
  IProductDataProps,
  IShoppingCartProps,
} from "../../../@types/products";
import { bodyStyles } from "./bodyStyles";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SimpleDialog from "../../../assets/dialog/simpleDialog";

export default function Body() {
  const [shoppingCart, setShoppingCart] = useState<Array<IShoppingCartProps>>(
    []
  );
  const [quantity, setQuantity] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  useEffect(() => {
    let returnData = localStorage.getItem("shoppingCart");
    if (returnData) {
      setShoppingCart(JSON.parse(returnData));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  }, [shoppingCart]);

  const deleteItem = (items: IDeleteItemProps) => {
    let hardCopy = [...shoppingCart];
    hardCopy = hardCopy.filter((listItems) => listItems.id !== items.id);
    setShoppingCart(hardCopy);
  };
  const deleteAllItems = () => {
    localStorage.removeItem("shoppingCart");
    window.location.reload();
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const classes = bodyStyles();
  let teste = (items: IShoppingCartProps) => {
    return parseFloat((items.price * items.qty).toFixed(2));
  };
  const listItems = shoppingCart.map((items: any) => (
    <Grid key={items.id} container className={classes.listItems}>
      <Grid item md={3}>
        <Typography>{items.name}</Typography>
      </Grid>
      <Grid item md={3}>
        <Typography>{`U$${teste(items)}`}</Typography>
      </Grid>
      <Grid item md={3} className={classes.inputContainer}>
        <Typography>Qty: </Typography>
        <input
          className={classes.input}
          type="number"
          defaultValue={1}
          min={1}
          onChange={(e) => setQuantity(parseInt((items.qty = e.target.value)))}
        />
      </Grid>
      <Grid item md={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => deleteItem(items)}
        >
          <span className={classes.buttonText}>Remove</span>
          <span className={classes.buttonIcon}>
            <RemoveCircleIcon />
          </span>
        </Button>
      </Grid>
    </Grid>
  ));
  return (
    <>
      {listItems}
      <ButtonGroup className={classes.buttonGroup}>
        <Button variant="contained" onClick={() => deleteAllItems()}>
          <span className={classes.secondaryButtonText}>Delete all</span>
          <span className={classes.secondaryButtonIcon}>
            <DeleteIcon />
          </span>
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleOpen()}
        >
          <span className={classes.buttonText}>Finalize order</span>
          <span className={classes.buttonIcon}>
            <ShoppingCartIcon />
          </span>
        </Button>
      </ButtonGroup>
      <SimpleDialog
        selectedValue={
          <Typography variant="body1">Thanks for shopping with us!</Typography>
        }
        open={open}
        onClose={handleClose}
      />
    </>
  );
}
