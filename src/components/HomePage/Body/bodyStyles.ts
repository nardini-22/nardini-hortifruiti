import { makeStyles } from "@material-ui/core";

export const bodyStyles = makeStyles({
  productsCards: {
    background: "#fff",
    margin: 5,
    padding: 5,
    width: 200,
    border: "1px solid #f00",
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  buttonGroup: {
    display: "flex",
    marginBottom: 5,
    color: "#fff",
    flexDirection: "column",
  },
  buttonText: {
    display: "block",
    "@media (max-width:780px)": {
      display: "none",
    },
  },
  buttonIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@media (min-width:780px)": {
      display: "none",
    },
  },
});
