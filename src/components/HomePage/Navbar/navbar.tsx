import { AppBar, Box, Button, Container, Toolbar } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingBagIcon from "@material-ui/icons/ShoppingBasket";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { bodyStyles } from "../Body/bodyStyles";

export default function Navbar() {
  const classes = bodyStyles();
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Button>
              <HomeIcon />
            </Button>
            <Box>
              <Button>
                <span className={classes.buttonText}>Products</span>
                <span className={classes.buttonIcon}>
                  <ShoppingBagIcon />
                </span>
              </Button>
              <Button>
                <span className={classes.buttonText}>Shopping Cart</span>
                <span className={classes.buttonIcon}>
                  <ShoppingCartIcon />
                </span>
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
