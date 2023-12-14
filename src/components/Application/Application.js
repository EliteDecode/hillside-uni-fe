import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import Title from "../general/Title";
import applicationImg from "../../assets/application1.jpg";
import applicationImg2 from "../../assets/apply2.jpg";
import { Link } from "react-router-dom";

const Applications = ({ main }) => {
  return (
    <Box
      className=" py-10 bg-[#f7f7f7]"
      data-aos="fade-down"
      data-aos-duration="1200"
      data-aos-easing="ease-in-sine">
      <Box className="container">
        <Title title=" Apply Now" subtitle="Get Admitted" />

        <Box className="" sx={{ position: "relative" }}>
          <Grid container className="">
            <Grid item sm={12} md={6}>
              <img
                src={main ? applicationImg2 : applicationImg}
                alt="application"
                width="100%"
                className="rounded-l-lg"
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <Box className="custom-bg-red rounded-r-lg  text-center p-10 ">
                <Box className="my-8 ">
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: "bold",
                      color: "#fff",
                      fontSize: "35px",
                    }}>
                    Apply For Admission
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "18px",
                      color: "#fff",
                      opacity: "0.8",
                      marginTop: "2%",
                    }}>
                    2023/2024 Applications Coming Soon
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      color: "#fff",
                      opacity: "0.6",
                      fontSize: "13px",
                      marginTop: "2%",
                    }}>
                    We create and sustain an environment that is conducive for
                    teaching, learning and promotes the development of
                    excellence and innovation.
                  </Typography>

                  <Box className="mt-16">
                    <Link to="https://admissions.hust.edu.ng/">
                      <Button
                        size="large"
                        variant="outlined"
                        disableElevation
                        sx={{
                          bgcolor: "#fff",
                          color: "#5e0001",
                          fontSize: "15px",
                          fontWeight: "bold",
                          border: "1px solid #fff",
                          "&:hover": {
                            bgcolor: "transparent",
                            color: "#fff",
                            border: "1px solid #fff",
                          },
                        }}>
                        APPLY NOW
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Applications;
