import {
  Box,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React from "react";
import Title from "../general/Title";
import libImg from "../../assets/library3.jpg";
import { libraryFeatures } from "../../utils/data";
import { Avatar } from "antd";
const Library = () => {
  return (
    <Box
      className=" py-10 bg-[#f7f7f7]"
      data-aos="fade-down"
      data-aos-duration="1200"
      data-aos-easing="ease-in-sine">
      <Box className="container">
        <Title title="Library" subtitle="Our Library" />
        <Box className=" ">
          <Grid container rowSpacing={4}>
            <Grid item sm={12} md={6}>
              <img src={libImg} className="rounded-md shadow-md  bg-white" />
            </Grid>
            <Grid
              item
              sm={12}
              md={6}
              className="px-5 shadow-md rounded-md bg-white">
              {libraryFeatures.map((features, index) => (
                <ListItem key={index}>
                  <ListItemAvatar>
                    <Avatar style={{ color: "#1d6400" }}>
                      {features.icon}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    sx={{
                      color: "#000",
                    }}
                    secondaryTypographyProps={{
                      color: "#00080",
                      fontSize: "13px",
                    }}
                    primaryTypographyProps={{
                      fontWeight: "bold",
                      fontSize: "14px",
                    }}
                    primary={features.title}
                    secondary={features.description}
                  />
                </ListItem>
              ))}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Library;
