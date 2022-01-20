import { Button, Grid, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { IProductDataProps } from "../../../@types/products";
import { api } from "../../../services/api";
import { bodyStyles } from "./bodyStyles";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import InfoIcon from "@material-ui/icons/Info";

import Apple from "../../../assets/fruits/apple.jpg";
import Apricot from "../../../assets/fruits/apricot.jpg";

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
  useEffect(() => {
    window.localStorage.setItem("shoppingCart", shoppingCart);
  }, [shoppingCart]);
  const classes = bodyStyles();
  const productsList = productsData.map((data: IProductDataProps) => (
    <Grid className={classes.productsCards} item md={3} xs={4}>
      <img
        width="150"
        height="150"
        src={
          data.name === "Apple"
            ? Apple
            : data.name === "Apricot"
            ? Apricot
            : undefined
        }
        alt="fruit"
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
