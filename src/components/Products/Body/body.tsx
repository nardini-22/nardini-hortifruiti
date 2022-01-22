import {
  Button,
  Grid,
  List,
  ListSubheader,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import {
  IDetailsProps,
  INutritionsProps,
  IProductDataProps,
  IShoppingCartProps,
} from "../../../@types/products";
import { api } from "../../../services/api";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import InfoIcon from "@material-ui/icons/Info";

import Apple from "../../../assets/fruits/apple.jpg";
import Apricot from "../../../assets/fruits/apricot.jpg";
import Banana from "../../../assets/fruits/banana.jpg";
import Blackberry from "../../../assets/fruits/blackberry.jpg";
import Blueberry from "../../../assets/fruits/blueberry.jpg";
import Cherry from "../../../assets/fruits/cherry.jpg";
import Durian from "../../../assets/fruits/durian.jpg";
import Fig from "../../../assets/fruits/fig.jpg";
import Gooseberry from "../../../assets/fruits/gooseberry.jpg";
import Grapes from "../../../assets/fruits/grapes.jpg";
import Guava from "../../../assets/fruits/guava.jpg";
import Kiwi from "../../../assets/fruits/kiwi.jpg";
import Lemon from "../../../assets/fruits/lemon.jpg";
import Lime from "../../../assets/fruits/lime.jpg";
import Lingonberry from "../../../assets/fruits/lingonberry.jpg";
import Lychee from "../../../assets/fruits/lychee.jpeg";
import Mango from "../../../assets/fruits/mango.jpg";
import Melon from "../../../assets/fruits/melon.jpg";
import Orange from "../../../assets/fruits/orange.jpg";
import Papaya from "../../../assets/fruits/papaya.jpg";
import Passionfruit from "../../../assets/fruits/passionfruit.jpg";
import Pear from "../../../assets/fruits/pear.jpg";
import Persimmon from "../../../assets/fruits/persimmon.jpg";
import Pineapple from "../../../assets/fruits/pineapple.jpg";
import Raspberry from "../../../assets/fruits/raspberry.jpg";
import Strawberry from "../../../assets/fruits/strawberry.jpg";
import Tomato from "../../../assets/fruits/tomato.jpg";
import Watermelon from "../../../assets/fruits/watermelon.jpg";
import { bodyStyles } from "./bodyStyles";
import SimpleDialog from "../../../assets/dialog/simpleDialog";
import { Link } from "react-router-dom";

export default function Body() {
  const [productsData, setProductsData] = useState<Array<IProductDataProps>>(
    []
  );
  const [shoppingCart, setShoppingCart] = useState<Array<IShoppingCartProps>>(
    []
  );
  const [open, setOpen] = useState<boolean>(false);
  const [openDetails, setOpenDetails] = useState<boolean>(false);
  const [nutrition, setNutrition] = useState<INutritionsProps>({
    carbohydrates: 0,
    protein: 0,
    fat: 0,
    calories: 0,
    sugar: 0,
  });
  useEffect(() => {
    async function getData() {
      await api
        .get("/api/fruit/all")
        .then((res) => {
          console.log(res.data);
          setProductsData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getData();
  }, []);

  useEffect(() => {
    let returnData = localStorage.getItem("shoppingCart");
    if (returnData) {
      setShoppingCart(JSON.parse(returnData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  }, [shoppingCart]);

  const classes = bodyStyles();
  const productsList = productsData.map((data: IProductDataProps) => (
    <Grid key={data.id} className={classes.productsCards} item md={3} xs={4}>
      <img
        className={classes.img}
        src={
          data.name === "Apple"
            ? Apple
            : data.name === "Apricot"
            ? Apricot
            : data.name === "Banana"
            ? Banana
            : data.name === "Blackberry"
            ? Blackberry
            : data.name === "Blueberry"
            ? Blueberry
            : data.name === "Cherry"
            ? Cherry
            : data.name === "Durian"
            ? Durian
            : data.name === "Fig"
            ? Fig
            : data.name === "Gooseberry"
            ? Gooseberry
            : data.name === "Grapes"
            ? Grapes
            : data.name === "Guava"
            ? Guava
            : data.name === "Kiwi"
            ? Kiwi
            : data.name === "Lemon"
            ? Lemon
            : data.name === "Lime"
            ? Lime
            : data.name === "Lingonberry"
            ? Lingonberry
            : data.name === "Lychee"
            ? Lychee
            : data.name === "Mango"
            ? Mango
            : data.name === "Melon"
            ? Melon
            : data.name === "Orange"
            ? Orange
            : data.name === "Papaya"
            ? Papaya
            : data.name === "Passionfruit"
            ? Passionfruit
            : data.name === "Pear"
            ? Pear
            : data.name === "Persimmon"
            ? Persimmon
            : data.name === "Pineapple"
            ? Pineapple
            : data.name === "Raspberry"
            ? Raspberry
            : data.name === "Strawberry"
            ? Strawberry
            : data.name === "Tomato"
            ? Tomato
            : data.name === "Watermelon"
            ? Watermelon
            : undefined
        }
        alt="fruits"
      />
      <Typography variant="h6">{data.name}</Typography>
      <Typography gutterBottom variant="h6">
        U$ 9.90
      </Typography>
      <Grid className={classes.buttonGroup}>
        <Button
          onClick={() => addToCart(data)}
          variant="contained"
          color="primary"
        >
          <span className={classes.buttonText}>Add to cart</span>
          <span className={classes.buttonIcon}>
            <AddShoppingCartIcon />
          </span>
        </Button>
        <Button onClick={() => handleDetails(data)} variant="contained">
          <span className={classes.secondaryButtonText}>Details</span>
          <span className={classes.secondaryButtonIcon}>
            <InfoIcon />
          </span>
        </Button>
      </Grid>
    </Grid>
  ));

  const addToCart = (data: IProductDataProps) => {
    let added = true;
    for (let i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].id === data.id) {
        added = false;
      }
    }
    if (added) {
      setShoppingCart([
        ...shoppingCart,
        {
          id: data.id,
          name: data.name,
          qty: 1,
          price: 9.9,
        },
      ]);
    } else {
      console.log("O produto já está no carrinho!");
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseDetails = () => {
    setOpenDetails(false);
  };

  const handleDetails = (data: IProductDataProps) => {
    setOpenDetails(true);
    setNutrition({ ...data.nutritions });
  };

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item md={12}>
          <Typography align="center" variant="h4" color="primary">
            Our products
          </Typography>
        </Grid>
        {productsList}
      </Grid>
      <SimpleDialog
        selectedValue={
          <Typography variant="body1">
            This product is already in your cart! To go to your cart click{" "}
            <Link to="/cart">here!</Link>
          </Typography>
        }
        open={open}
        onClose={handleClose}
      />
      <SimpleDialog
        selectedValue={
          <List
            subheader={
              <ListSubheader id="list-subheader">
                Nutritional values
              </ListSubheader>
            }
          >
            <ListItemText
              primary={`Carbohydrates: ${nutrition.carbohydrates}`}
            />
            <ListItemText primary={`Protein: ${nutrition.protein}`} />
            <ListItemText primary={`Fat: ${nutrition.fat}`} />
            <ListItemText primary={` Calories: ${nutrition.calories}`} />
            <ListItemText primary={`Sugar: ${nutrition.sugar}`} />
          </List>
        }
        open={openDetails}
        onClose={handleCloseDetails}
      />
    </>
  );
}
