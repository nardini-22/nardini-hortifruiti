import { makeStyles } from "@material-ui/core";

export const bodyStyles = makeStyles({
  productsCards: {
    background: "#fff",
    margin: "5px!important",
    padding: 5,
    width: 200,
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    boxShadow: "0px 1px 4px -1px #000000",
  },
  buttonGroup: {
    display: "flex",
    marginBottom: 5,
    "@media (max-width:780px)": {
      flexDirection: "column",
    },
  },
  buttonText: {
    display: "block",
    color: "#fff",
    "@media (max-width:780px)": {
      display: "none",
    },
  },
  secondaryButtonText: {
    display: "block",
    "@media (max-width:780px)": {
      display: "none",
    },
  },
  buttonIcon: {
    display: "flex",
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
    "@media (min-width:780px)": {
      display: "none",
    },
  },
  secondaryButtonIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@media (min-width:780px)": {
      display: "none",
    },
  },
  img: {
    width: "150px",
    height: "150px",
    "@media (max-width:780px)": {
      width: "50px",
      height: "50px",
    },
  },
  link: {
    textDecoration: "none",
  },
  homeIcon: {
    color: "#fff",
  },
});
