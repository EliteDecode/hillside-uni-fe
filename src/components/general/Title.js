import { Box, Typography } from "@mui/material";
import React from "react";

const Title = ({ subtitle, title }) => {
  return (
    <Box className="py-10">
      <Typography
        variant="h3"
        sx={{
          fontWeight: 600,
          padding: "4px 0px",
          color: "#5e0001",
          fontSize: "29px",
          marginTop: "4%",

          "@media (max-width:767px)": {
            fontSize: "20px",
          },
        }}>
        {subtitle}
      </Typography>
      <Box
        sx={{
          borderBottom: "8px solid #236007",
          width: "10vh",
          "@media (max-width:767px)": {
            width: "16vw",
          },
        }}></Box>
      <Typography
        sx={{
          fontSize: "45px",
          fontWeight: "Bold",
          marginTop: "2%",
          "@media (max-width:767px)": {
            fontSize: "35px",
          },
        }}>
        {title}
      </Typography>
    </Box>
  );
};

export default Title;
