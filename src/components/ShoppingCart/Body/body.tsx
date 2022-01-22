import { Button, ButtonGroup, Grid, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IDeleteItemProps, IShoppingCartProps } from "../../../@types/products";
import SimpleDialog from "../../../assets/dialog/simpleDialog";
import { bodyStyles } from "./bodyStyles";

export default function Body() {
  const [shoppingCart, setShoppingCart] = useState<Array<IShoppingCartProps>>(
    []
  );
  let [quantity, setQuantity] = useState<number>(1);
  let [cartTotal, setCartTotal] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  useEffect(() => {
    let returnData = localStorage.getItem("shoppingCart");
    if (returnData) {
      setShoppingCart(JSON.parse(returnData));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
    total();
  }, [shoppingCart, quantity]);

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
    localStorage.removeItem("shoppingCart");
  };
  const handleClose = () => {
    setOpen(false);
  };
  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
      totalVal += shoppingCart[i].price * shoppingCart[i].qty;
    }
    setCartTotal(parseFloat(totalVal.toFixed(2)));
  };
  const classes = bodyStyles();
  let priceAlt = (items: IShoppingCartProps) => {
    return parseFloat((items.price * items.qty).toFixed(2));
  };
  const listItems = shoppingCart.map((items: IShoppingCartProps) => (
    <Grid key={items.id} container className={classes.listItems}>
      <Grid item md={3} xs={2}>
        <Typography>{items.name}</Typography>
      </Grid>
      <Grid item md={3} xs={2}>
        <Typography>{`U$${priceAlt(items)}`}</Typography>
      </Grid>
      <Grid item md={3} xs={2} className={classes.inputContainer}>
        <Typography>Qty: </Typography>
        <input
          className={classes.input}
          type="number"
          defaultValue={items.qty}
          min={1}
          onChange={(e) => setQuantity((items.qty = parseInt(e.target.value)))}
        />
      </Grid>
      <Grid item md={2} xs={3}>
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
      <Typography variant="body1" align="center">
        Total: U${cartTotal}
      </Typography>
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
          <>
            <Typography variant="body1">
              Your purchase costs U${cartTotal}
            </Typography>
            <Typography align="center" variant="body1">
              Thanks for shopping with us!
            </Typography>
            <Typography align="center" variant="body1">
              <Link to="/">Go to home</Link>
            </Typography>
          </>
        }
        open={open}
        onClose={handleClose}
      />
    </>
  );
}
