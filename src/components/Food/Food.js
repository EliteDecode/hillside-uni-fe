import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Title from "../general/Title";
import hostelImg from "../../assets/store1.jpg";
import hostel2Img from "../../assets/store2.jpg";
import { foodFeatures } from "../../utils/data";

const Food = () => {
  return (
    <Box
      className=" py-10 bg-[#f7f7f7]"
      data-aos="fade-down"
      data-aos-duration="1200"
      data-aos-easing="ease-in-sine">
      <Box className="container">
        <Title title="" subtitle="Food Service" />
        <Box className="p-3 shadow-md rounded-md bg-white">
          <Grid container rowSpacing={4}>
            <Grid item sm={12} md={6} className="my-4 ">
              <img src={hostelImg} className="rounded-md w-full mb-8" />
              <img src={hostel2Img} className="rounded-md w-full" />
            </Grid>
            <Grid item sm={12} md={6} className="sm:sm:p-5 p-0">
              <Box>
                <Grid container spacing={2}>
                  {foodFeatures.map((resource, index) => (
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

export default Food;
