import { Paper, Typography } from "@material-ui/core";
import { headerStyles } from "./headerStyles";

export default function Header() {
  const classes = headerStyles();
  return (
    <>
      <Paper elevation={0} className={classes.imgContainer}>
        <Typography className={classes.title} variant="h1" color="textPrimary">
          Nardini's Hortifruti
        </Typography>
        <Typography variant="body1" className={classes.subTitle}>
          O melhor sempre perto de você!
        </Typography>
      </Paper>
    </>
  );
}
