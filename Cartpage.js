import React, { useState, button, CardMedia } from "react";
import Layout from "../components/Layout";
import itemlist from "../pages/data";
import "../Style/cart.css";
import Header from "../components/Header";
import { Route, Link, Routes, useNavigate,useHistory } from "react-router-dom";

import updatedCartItems from "../pages/Menu";
import { FaTrash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Divider,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio
} from "@material-ui/core";
import { CardActionArea } from "@mui/material";

const CartPage = ({ cartItems }) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const data = JSON.parse(localStorage.getItem("cartItems")) || [];
  const [counts, setCounts] = useState(data.map(() => 1));
  const [open, setOpen] = useState(false);
  //const history = useHistory();

  const handleSubmitClick = () => {
    history.push('/home');
  };

  const handleIncrement = (index) => {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index] = newCounts[index] + 1;
      return newCounts;
    });
  };

  const handleDecrement = (index) => {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      if (newCounts[index] > 1) {
        newCounts[index] = newCounts[index] - 1;
      }
      return newCounts;
    });
  };

  const handleRemove = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    localStorage.setItem("cartItems", JSON.stringify(newData));
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts.splice(index, 1);
      return newCounts;
    });
  };

  const save = () => {
    toast.info("Item saved for later", { position: "top-right" });
  };

  const shippingFee = data.length > 0 ? 5 : 0;

  const handleButtonClick = () => {
    setOpen(false);
    toast.success("Your cart is ready to check out.", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
      hideProgressBar: true,
      closeButton: false
    });
  };

  return (
    <div>
      <Layout>
        
        <h1> ITEMS PRESENT IN YOUR CART </h1>
        {data.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <table>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Remove</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <img src={item.image} alt={item.name} width="70" />{" "}
                          <span>{item.name}</span>
                        </div>
                      </td>
                      <td> Rs{item.price}</td>
                      <td>
                        <FaTrash
                          className="remove_icon"
                          onClick={() => handleRemove(index)}
                        />
                      </td>
                      <td>
                        <button onClick={() => handleIncrement(index)}>
                          +
                        </button>
                        <span>{counts[index]}</span>
                        <button onClick={() => handleDecrement(index)}>
                          {" "}
                          -{" "}
                        </button>
                      </td>
                      <td>Rs {item.price * counts[index]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button onClick={goBack}> Go back to Menu </button>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card className="card">
                <CardContent>
                  <Typography
                    variant="h5"
                    style={{ fontSize: "24px" }}
                    className="card-title"
                  >
                    {" "}
                    Price Details
                  </Typography>
                  <Divider />
                  <br />
                  <Typography variant="h6" className="card-shipping-fee">
                    Delivery fee: Rs {shippingFee}
                  </Typography>

                  <Typography variant="h6" className="card-price">
                    Total Amount : Rs{" "}
                    {data.reduce(
                      (total, item, index) =>
                        total + item.price * counts[index],
                      0
                    ) + shippingFee}
                    <Divider />
                    <Divider />
                    <br />
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Button
                          className="checkout-button"
                          onClick={() => setOpen(true)}
                        >
                          Checkout now{" "}
                        </Button>
                        <Dialog
                          open={open}
                          onClose={() => setOpen(false)}
                          aria-labelledby="dialog-title"
                          aria-describedby="dialog-description"
                        >
                          <DialogTitle id="dialog-title" className="dialog">
                            Your Total order : Rs{" "}
                            {data.reduce(
                              (total, item, index) =>
                                total + item.price * counts[index],
                              0
                            ) + shippingFee}
                            <Divider />
                            Choose Your Method of Payment
                          </DialogTitle>
                          <DialogContent>
                            <DialogContentText id="dialog-description">
                              <FormControl component="fieldset">
                                <RadioGroup
                                  aria-label="payment option"
                                  name="payment-option"
                                >
                                  <FormControlLabel
                                    value="upi"
                                    control={<Radio />}
                                    label="UPI"
                                  />
                                  <FormControlLabel
                                    value="credit"
                                    control={<Radio />}
                                    label="Credit card"
                                  />
                                  <FormControlLabel
                                    value="cod"
                                    control={<Radio />}
                                    label="Cash on Delivery"
                                  />
                                </RadioGroup>
                              </FormControl>
                            </DialogContentText>
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={() => setOpen(false)}>
                              Cancel
                            </Button>
                            <Button onClick={handleSubmitClick} autoFocus>
                              Submit
                            </Button>

                            <ToastContainer />
                          </DialogActions>
                        </Dialog>
                      </Grid>

                      <Grid item xs={6}>
                        <Button
                          className="checkout-button"
                          onClick={() => save()}
                        >
                          Save for Later
                        </Button>

                        <ToastContainer />
                      </Grid>
                    </Grid>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}
      </Layout>
    </div>
  );
};
export default CartPage;
