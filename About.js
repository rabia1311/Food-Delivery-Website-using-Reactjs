import React from "react";
import Layout from "../components/Layout";
import { Typography } from "@mui/material";
import backgroundcontact from "../images/backgroundcontact.jpg";
import zomato from "../images/zomato.jpg";
import swiggy from "../images/swiggy.jpg";
import ubereats from "../images/ubereats.jpg";
import "../Style/About.css";
import { Route, Link, Routes, useNavigate } from "react-router-dom";
import Header from "../components/Header";


const About = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <Layout>
      <div
        className="background"
        style={{ backgroundImage: `url(${backgroundcontact})` }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          align="center"
          style={{ marginTop: "0" }}
        >
          ABOUT US
        </Typography>
        <div style={{ width: "400px", opacity: "" }}>
          <Typography variant="h4" align="left" fontWeight="bold">
            Welcome To Our Restuarant
          </Typography>
          <p>
            At our restaurant, we believe that food should not only be
            delicious, but also a memorable experience. Our passion for culinary
            arts is reflected in every dish we serve, carefully crafted with the
            fresh ingredients and a keen attention to detail. Our team of chefs
            has years of experience in the industry, and their innovative
            techniques and creative vision inspire us to push the boundaries of
            traditional cuisine.
          </p>
        </div>
      </div>

      <div>
        <Typography variant="h4" align="center" fontWeight="bold">
          OUR PARTNERS
        </Typography>
        <table align="center">
          <tbody>
            <tr>
              <td style={{ margin: "10px" }}>
                <div
                  className="album"
                  style={{ backgroundImage: `url(${zomato})` }}
                >
                  <img
                    src={zomato}
                    alt="Zomato"
                    style={{
                      width: "100px",
                      height: "100px",
                      margin: "10px"
                    }}
                  />
                </div>
              </td>
              <td style={{ margin: "10px" }}>
                <div
                  className="album"
                  style={{ backgroundImage: `url(${swiggy})` }}
                >
                  <img
                    src={swiggy}
                    alt="Swiggy"
                    style={{
                      width: "100px",
                      height: "100px",
                      margin: "10px"
                    }}
                  />
                </div>
              </td>
              <td style={{ margin: "10px" }}>
                <div
                  className="album"
                  style={{ backgroundImage: `url(${ubereats})` }}
                >
                  <img
                    src={ubereats}
                    alt="Uber Eats"
                    style={{
                      width: "100px",
                      height: "100px",
                      margin: "10px",
                      padding: 2
                    }}
                  />
                  <br />
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <button onClick={goBack}> Go back</button>
      </div>
    </Layout>
  );
};

export default About;
