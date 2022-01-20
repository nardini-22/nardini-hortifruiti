import { Button, Grid, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { IProductDataProps } from "../../../@types/products";
import { api } from "../../../services/api";
import { bodyStyles } from "./bodyStyles";
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

export default function Body({ setShoppingCart, shoppingCart }: any) {
  const [productsData, setProductsData] = useState<Array<IProductDataProps>>(
    []
  );
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
  const classes = bodyStyles();
  const productsList = productsData.map((data: IProductDataProps) => (
    <Grid className={classes.productsCards} item md={3} xs={4}>
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
      <Typography gutterBottom variant="h6">
        {data.name}
      </Typography>
      <Grid className={classes.buttonGroup}>
        <Button
          onClick={() => addToCart(data)}
          variant="contained"
          color="primary"
        >
          <span className={classes.buttonText}>Adicionar ao carrinho</span>
          <span className={classes.buttonIcon}>
            <AddShoppingCartIcon />
          </span>
        </Button>
        <Button onClick={() => console.log(shoppingCart)} variant="contained">
          <span className={classes.buttonText}>Ver detalhes</span>
          <span className={classes.buttonIcon}>
            <InfoIcon />
          </span>
        </Button>
      </Grid>
    </Grid>
  ));

  const addToCart = (data: IProductDataProps) => {
    setShoppingCart([...shoppingCart, data]);
  };
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item md={11} xs={12}>
          <Typography gutterBottom variant="h4" color="primary">
            Nossos produtos
          </Typography>
        </Grid>
        {productsList}
      </Grid>
    </>
  );
}
