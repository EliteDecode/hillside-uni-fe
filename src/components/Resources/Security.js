import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Title from "../general/Title";
const Security = () => {
  return (
    <Box
      className=" py-10 bg-[#f7f7f7]"
      data-aos="fade-down"
      data-aos-duration="1200"
      data-aos-easing="ease-in-sine">
      <Box className="container">
        <Title title="" subtitle="Security Unit" />
        <Box className="p-3 shadow-md rounded-md bg-white">
          <Grid container rowSpacing={4}>
            <Grid item sm={12} md={12} className="my-4 ">
              <div class="container mx-auto sm:p-4 p-0">
                <div class=" my-8">
                  <h1 class="sm:text-2xl text-xl font-bold mb-4">
                    Security Unit at Hillside University of Science and
                    Technology
                  </h1>
                  <p class="sm:text-lg text-sm">
                    At Hillside University, safety is our top priority. We have
                    implemented comprehensive security measures that guarantee
                    the well-being of every member of our university community.
                    Our campus is under constant surveillance, and we have
                    well-trained security personnel that can respond promptly in
                    case of emergencies. With these measures in place, students
                    can concentrate on their studies without worrying about
                    their personal safety.
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

export default Security;
