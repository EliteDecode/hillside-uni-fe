import {
  Box,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import Title from "../general/Title";
import hrImg from "../../assets/hr.jpg";
import { libraryFeatures, schoolResourceContents } from "../../utils/data";
import { Avatar } from "antd";
const Hr = () => {
  return (
    <Box
      className=" py-10 bg-[#f7f7f7]"
      data-aos="fade-down"
      data-aos-duration="1200"
      data-aos-easing="ease-in-sine">
      <Box className="container">
        <Title title="Human Resources" subtitle=" Human Resources" />
        <Box className=" shadow-md rounded-md bg-white">
          <Grid container rowSpacing={4}>
            <Grid
              item
              sm={12}
              md={5}
              className="flex items-center justify-center ">
              <img src={hrImg} className="rounded-md" />
            </Grid>
            <Grid item sm={12} md={7} className="p-5">
              <Box>
                <Grid container spacing={2}>
                  {schoolResourceContents.map((resource, index) => (
                    <Grid item sm={6} md={6} key={index}>
                      <Box className="border shadow-md rounded-md p-4 bg-white">
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: "bold",
                            fontSize: "16px",
                            color: "#5e0001",
                          }}>
                          {resource.title}
                        </Typography>
                        <Typography
                          variant="subtitle"
                          sx={{
                            marginTop: "3%",
                            opacity: 0.8,
                            fontSize: "14px",
                            "@media (max-width: 575px)": {
                              fontSize: "13px",
                            },
                          }}>
                          {resource.description}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Hr;
