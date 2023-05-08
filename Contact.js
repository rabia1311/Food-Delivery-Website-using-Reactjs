import React from "react";
import Layout from "../components/Layout";
import { Box, Button, Typography } from "@mui/material";
import { Route, Link, Routes, useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <Layout>
      <Box sx={{ my: 10, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4">Contact Our Restaurant</Typography>
        <p>
          Please feel free to contact us using the information below: Address:
          123 Main Street, Anytown USA 12345
          <br />
          Phone: (555) 555-5555
          <br />
          Email: info@restaurant.com
          <br />
          Hours of Operation:
          <br />
          Monday - Friday: 11am - 10pm
          <br />
          Saturday - Sunday: 9am - 11pm
          <br />
          We also welcome reservations, which can be made by phone or email. We
          look forward to hearing from you and hope to see you soon!
        </p>
      </Box>
      <Box sx={{ my: 10, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography>
          <form>
            <label
              htmlFor="message"
              style={{ fontWeight: "bold", color: "black" }}
            >
              <h3>Send us your feedback:</h3>
            </label>
            <textarea id="message" name="message" rows="10"></textarea>
            <br />
            <Button
              style={{ backgroundColor: "blue", color: "white" }}
              type="submit"
            >
              Submit
            </Button>{" "}
          </form>{" "}
          <br />
          <button onClick={goBack}> Go back</button>
        </Typography>
      </Box>
    </Layout>
  );
};

export default Contact;
