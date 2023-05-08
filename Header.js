import React, { useState } from "react";
import { FormControl } from " react-bootstrap ";
import "../Style/Headerstyle.css"
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import {
  AppBar,
  Box,
  Typography,
  Toolbar,
  IconButton,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemText
} from "@mui/material";
import FastfoodOutlinedIcon from "@mui/icons-material/FastfoodOutlined";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const Header = (props) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);
  //handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleDrawerCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
    
  };
  const removeItemFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };
  function toggleCart() {
    setCartVisible(!cartVisible);
  }

  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h5"
        component="div"
        sx={{ flexGrow: 1 }}
      >
        <FastfoodOutlinedIcon />
        FOODIE
      </Typography>

      <Divider />

      <ul className="mobile-navigation">
        <li>
          <div>View Cart </div>
          <Link to={"/Cartpage"}>View Cart </Link>
        </li>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/menu"}>Menu</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </Box>
  );

  const displayCartItems = () => {
    return cartItems.map((item, index) => (
      <div key={index}>
        <span>{item.name}</span>
        <span>{item.price}</span>
        <button onClick={() => removeItemFromCart(index)}>Remove</button>
      </div>
    ));
  };
  return (
    <>
      <header>
      
      </header>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "green" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { xs: "none", sm: "block" } }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h5"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <FastfoodOutlinedIcon />
              FOODIE
            </Typography>
            <FormControl style={{width:500}}  placeholder="Search any Food item you want to order"className="m-auto"/>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <div>

                  
                  <IconButton className ="icon">
                    <ShoppingCartTwoToneIcon />
                    <div> ({props.cartItemCount})</div>
                  </IconButton>

                  <Drawer
                    variant="temporary"
                    anchor="right"
                    open={isCartOpen}
                    onClose={handleDrawerCart}
                    sx={{
                      display: { xs: "none", sm: "block" },
                      width: "240px",
                      "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: "240px"
                      }
                    }}
                  >
                    <ul>
                      {cartItems.map((item) => (
                        <li key={item.name}>
                          {item.name} - ${item.price}
                        </li>
                      ))}
                    </ul>
                    
                  </Drawer>
                </div>
                <li>
                  <Link to={"/Cartpage"}>View Cart</Link>
                </li>

                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/menu"}>Menu</Link>
                </li>
                <li>
                  <Link to={"/about"}>About</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "none", sm: "block" },
              width: "240px",
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px"
              }
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;