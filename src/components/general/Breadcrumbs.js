import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
const Breadcrumbs = ({ primaryPage, secondaryPage }) => (
  <Box className="container">
    <Breadcrumb
      className="text-[19px] my-5"
      items={[
        {
          title: <Link to={`/${primaryPage}`}>{primaryPage}</Link>,
        },
        {
          title: secondaryPage,
        },
      ]}
    />
  </Box>
);
export default Breadcrumbs;
