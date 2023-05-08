import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Typography, Box } from "@mui/material";
import "../Style/Footer.css";

const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ paddingBottom: "60px" }}>
        {/* Main content of your page */}
        {/* ... */}
      </Box>
      <Box className="footer">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "& svg": {
              fontSize: "20px",
              cursor: "pointer",
              margin: "0 10px"
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateY(-5px)",
              transition: "all 400ms"
            }
          }}
        >
          {/*icons*/}
          <InstagramIcon />
          <TwitterIcon />
          <GitHubIcon />
          <YouTubeIcon />
        </Box>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            textAlign: "center"
          }}
        >
          All Rights Reserved &copy; Foodie
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
