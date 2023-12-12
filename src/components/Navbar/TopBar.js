import { Box, Button } from "@mui/material";
import React from "react";
import { TopLinks } from "../../utils/data";
import { LocationOn, MailTwoTone, PhoneCallback } from "@mui/icons-material";
import { Typography } from "antd";

const TopBar = () => {
  return (
    <Box className="py-2 px-0.5 custom-bg-red">
      <Box className="container">
        <Box className=" flex flex-wrap items-center justify-between  ">
          <Box className="flex items-center sm:justify-around justify-between sm:w-auto  w-full space-x-1 sm:mb-0 mb-2">
            <Box className="space-x-4 flex ">
              <a href={require("../../assets/brochure.pdf")} download>
                <Button
                  size="small"
                  variant="contained"
                  disableElevation
                  sx={{
                    bgcolor: "#fff",
                    color: "#5e0001",
                    fontSize: "10px",
                    fontWeight: "bold",
                  }}>
                  Download brochure
                </Button>
              </a>
              <Box className="sm:block hidden">
                <Button
                  size="small"
                  variant="contained"
                  disableElevation
                  sx={{
                    bgcolor: "#fff",
                    color: "#5e0001",
                    fontSize: "10px",
                    fontWeight: "bold",
                    marginBottom: "2%",
                  }}>
                  Click here to Apply
                </Button>
              </Box>
            </Box>
            <Box className="space-x-2 flex">
              <Button
                size="small"
                variant="contained"
                disableElevation
                sx={{
                  bgcolor: "#f7f7f780",
                  color: "#5e0001",
                  fontSize: "10px",
                  fontWeight: "bold",
                  "&:hover": {
                    background: "#5e0001",
                    color: "#fff",
                  },
                }}>
                Follow Us
              </Button>
            </Box>
            <Box className="flex space-x-2 items-center">
              {TopLinks.map((icon, index) => (
                <Box key={index}>{icon}</Box>
              ))}
            </Box>
          </Box>
          <Box className="sm:hidden block">
            <Button
              size="small"
              variant="contained"
              disableElevation
              sx={{
                bgcolor: "#fff",
                color: "#5e0001",
                fontSize: "10px",
                fontWeight: "bold",
                marginBottom: "2%",
              }}>
              Click here to Apply
            </Button>
          </Box>
          <Box className="sm:flex hidden flex-wrap items-center sm:space-x-4 space-x-1 ">
            <Box className="flex items-center sm:mr-0 mr-4 ">
              <LocationOn sx={{ color: "#f7f7f790", fontSize: "14px" }} />
              <Typography
                variant="subtitle2"
                style={{
                  color: "#f7f7f7",
                  fontSize: "9px",
                  fontWeight: "bold",
                }}>
                okemesi, Ekiti , Nigeria
              </Typography>
            </Box>

            <Box className="flex items-center sm:mt-0 mt-1 ">
              {/* <PhoneCallback sx={{ color: "#f7f7f790", fontSize: "14px" }} />
              <Typography
                variant="subtitle2"
                style={{
                  color: "#f7f7f7",
                  fontSize: "9px",
                  fontWeight: "bold",
                }}>
                +234-(901)-070-7383
              </Typography> */}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TopBar;
