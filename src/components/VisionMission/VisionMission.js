import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Title from "../general/Title";
import visionImg from "../../assets/vision.png";
import missionImg from "../../assets/mission.png";
import aimImg from "../../assets/aim.png";

const VisionMission = () => {
  return (
    <Box
      id="Mission and Vision"
      data-aos="fade-down"
      data-aos-duration="1200"
      data-aos-easing="ease-in-sine"
      className="mb-5">
      <Box className="container">
        <Title title="" subtitle="Our Mission & Vision" />
        <Box>
          <Grid container rowSpacing={8} columnSpacing={2}>
            <Grid item sm={12} md={4}>
              <Box className="px-3 py-4 border rounded-l-full  bg-[#1d6400]">
                <Box className="flex items-center justify-center flex-col">
                  <img src={aimImg} alt="HUST vision" width="50px" />
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      color: "#fff",
                      marginTop: 3,
                      fontSize: "23px",
                    }}>
                    Our Mission
                  </Typography>
                </Box>
              </Box>
              <Box className="sm:p-5 p-0 bg-[#f7f7f7] border rounded-md shadow-md mt-5">
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "12px",
                    opacity: "0.7",
                    lineHeight: "1.3rem",
                  }}>
                  <span className="text-[25px] font-bold text-[#5e0001]">
                    {" "}
                    To
                  </span>{" "}
                  lead the charge in educating and disseminating knowledge in
                  science and technology and to channel that knowledge toward
                  solving society’s challenges
                </Typography>
              </Box>
            </Grid>
            <Grid item sm={12} md={4}>
              <Box className="px-3 py-4 border  bg-[#5e0001]">
                <Box className="flex items-center justify-center flex-col">
                  <img src={visionImg} alt="HUST vision" width="50px" />
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      color: "#fff",
                      marginTop: 3,
                      fontSize: "23px",
                    }}>
                    Our Vision
                  </Typography>
                </Box>
              </Box>
              <Box className="sm:p-5 p-0 bg-[#f7f7f7] border rounded-md shadow-md mt-5">
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "12px",
                    opacity: "0.7",
                    lineHeight: "1.3rem",
                  }}>
                  <span className="text-[25px] font-bold text-[#1d6400]">
                    {" "}
                    To
                  </span>{" "}
                  To be a prestigious international university that champions
                  innovation, self -reliance, and the development of culturally
                  savvy and disciplined researchers and products.
                </Typography>
              </Box>
            </Grid>
            <Grid item sm={12} md={4}>
              <Box className="px-3 py-4 border rounded-r-full bg-[#1d6400]">
                <Box className="flex items-center justify-center flex-col">
                  <img src={missionImg} alt="HUST vision" width="50px" />
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      color: "#fff",
                      marginTop: 3,
                      fontSize: "23px",
                    }}>
                    Our Goal
                  </Typography>
                </Box>
              </Box>
              <Box className="sm:p-5 p-0 bg-[#f7f7f7] border rounded-md shadow-md mt-5">
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "12px",
                    opacity: "0.7",
                    lineHeight: "1.3rem",
                  }}>
                  <span className="text-[25px] font-bold text-[#5e0001]">
                    To
                  </span>{" "}
                  establish our university as a globally renowned institution,
                  celebrated for its commitment to innovation, self-reliance,
                  and the development of culturally astute and disciplined
                  researchers and products. Our aim is to empower individuals
                  who are dedicated to learning for the betterment of society,
                  with a focus on holistic education.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default VisionMission;
