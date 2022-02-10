import { AppBar, Box, Button, Container, Toolbar } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingBagIcon from "@material-ui/icons/ShoppingBasket";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { bodyStyles } from "../../Products/Body/bodyStyles";

export default function Navbar() {
  const classes = bodyStyles();
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link to="/">
              <Button>
                <HomeIcon className={classes.homeIcon} />
              </Button>
            </Link>
            <Box>
              <Link className={classes.link} to="/products">
                <Button>
                  <span className={classes.buttonText}>Products</span>
                  <span className={classes.buttonIcon}>
                    <ShoppingBagIcon />
                  </span>
                </Button>
              </Link>
              <Link className={classes.link} to="/cart">
                <Button>
                  <span className={classes.buttonText}>Shopping Cart</span>
                  <span className={classes.buttonIcon}>
                    <ShoppingCartIcon />
                  </span>
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
