import { Button, Grid, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import Header from "../components/HomePage/Header/header";
import Navbar from "../components/HomePage/Navbar/navbar";
import Body from "../components/ShoppingCart/Body/body";

export default function ShoppingCart() {
  return (
    <>
      <Header />
      <Navbar />
      <Body />
    </>
  );
}
