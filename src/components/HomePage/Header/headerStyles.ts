import { makeStyles } from "@material-ui/core";
import Image from "../../../assets/fruits.jpg";

export const headerStyles = makeStyles({
  imgContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${Image})`,
    height: 200,
  },
  title: {
    fontWeight: 500,
    color: "#fff",
    '@media (max-width:780px)': {
      fontSize: 30,
    },
  },
  subTitle: {
    color: "#fff",
  },
});
