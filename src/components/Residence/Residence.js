import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Title from "../general/Title";
import hostelImg from "../../assets/hostels.jpg";
import hostel2Img from "../../assets/hostel2.jpg";
import { residenceDetails, schoolResourceContents } from "../../utils/data";
const Residence = () => {
  return (
    <Box
      className=" py-10 bg-[#f7f7f7]"
      data-aos="fade-down"
      data-aos-duration="1200"
      data-aos-easing="ease-in-sine">
      <Box className="container">
        <Title title="Halls of Residence" subtitle=" Our Halls of Residence" />
        <Box className="p-3 shadow-md rounded-md bg-white">
          <Grid container rowSpacing={4}>
            <Grid item sm={12} md={6} className="my-4 ">
              <img src={hostelImg} className="rounded-md w-full mb-8" />
              <img src={hostel2Img} className="rounded-md w-full" />
            </Grid>
            <Grid item sm={12} md={6} className="sm:sm:p-5 p-0 p-0">
              <Box>
                <Grid container spacing={2}>
                  {residenceDetails.map((resource, index) => (
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
                            marginTop: "2%",
                            opacity: 0.8,
                            fontSize: "11px",
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

export default Residence;
