import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/Banner2.jpg";
import "../Style/HomeStyle.css";
import { Typography, Box } from "@mui/material";
const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Foodie</h1>
          <p>Best Food Delivery in India</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
      <Typography variant="h4" align="center" fontWeight="bold" color="black">
        Service Hours
      </Typography>
      <Box>
        <div className="service" align="center" fontWeight="bold" color="black">
          <br />
          Lunch - 12pm to 4pm
          <br />
          Dinner - 7pm - 11pm
          <br />
        </div>
      </Box>
    </Layout>
  );
};
export default Home;
