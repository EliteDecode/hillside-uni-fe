import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Title from "../general/Title";
const Ambience = () => {
  return (
    <Box
      className=" py-10 bg-[#f7f7f7]"
      data-aos="fade-down"
      data-aos-duration="1200"
      data-aos-easing="ease-in-sine">
      <Box className="container">
        <Title title="" subtitle="Natural Ambience" />
        <Box className="p-3 shadow-md rounded-md bg-white">
          <Grid container rowSpacing={4}>
            <Grid item sm={12} md={12} className="my-4 ">
              <div class="container mx-auto sm:p-4 p-0">
                <div class=" my-8">
                  <h1 class="sm:text-2xl text-xl font-bold mb-4">
                    The natural ambience at Hillside University of Science and
                    Technology
                  </h1>
                  <p class="sm:text-lg text-sm">
                    Our university is nestled in a serene natural environment
                    that blends learning with the tranquility of nature. The
                    lush greenery and serene landscapes of our campus offer a
                    peaceful respite from the busy daily life. This natural
                    ambiance enhances the educational experience and provides
                    students and faculty with a serene backdrop that stimulates
                    reflection and intellectual vigor
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item sm={12} md={12} className="sm:p-5 p-0">
              <Box></Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Ambience;
