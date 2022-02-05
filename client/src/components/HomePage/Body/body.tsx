import { Box, List, ListItemText, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { bodyStyles } from "./bodyStyles";

export default function Body() {
  const classes = bodyStyles();
  return (
    <Box className={classes.linkContainer}>
      <Typography color="primary" variant="h2">
        Welcome to our website!
      </Typography>
      <List>
        <ListItemText>
          To see our products click <Link to="/products">here</Link>!
        </ListItemText>
        <ListItemText>
          To see your shopping cart click <Link to="/cart">here</Link>!
        </ListItemText>
      </List>
    </Box>
  );
}
