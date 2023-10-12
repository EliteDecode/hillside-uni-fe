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
        <Title title="Mission & Vision" subtitle="Our Mission & Vision" />
        <Box>
          <Grid container rowSpacing={8} columnSpacing={2}>
            <Grid item sm={12} md={4}>
              <Box className="px-3 py-10 border rounded-l-full  bg-[#1d6400]">
                <Box className="flex items-center justify-center flex-col">
                  <img src={aimImg} alt="HUST vision" width="70px" />
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      color: "#fff",
                      marginTop: 3,
                      fontSize: "30px",
                    }}>
                    Our Mission
                  </Typography>
                </Box>
              </Box>
              <Box className="p-5 bg-[#f7f7f7] border rounded-md shadow-md mt-5">
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "16px",
                    opacity: "0.7",
                    lineHeight: "1.8rem",
                  }}>
                  <span className="text-[45px] font-bold text-[#5e0001]">
                    {" "}
                    To
                  </span>{" "}
                  generate, disseminate, advance knowledge, and educate students
                  in science and technology to bring this knowledge to finding
                  solutions to the major challenges facing society and the
                  world’s challenges in the 21st century.
                </Typography>
              </Box>
            </Grid>
            <Grid item sm={12} md={4}>
              <Box className="px-3 py-10 border  bg-[#5e0001]">
                <Box className="flex items-center justify-center flex-col">
                  <img src={visionImg} alt="HUST vision" width="70px" />
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      color: "#fff",
                      marginTop: 3,
                      fontSize: "30px",
                    }}>
                    Our Vision
                  </Typography>
                </Box>
              </Box>
              <Box className="p-5 bg-[#f7f7f7] border rounded-md shadow-md mt-5">
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "16px",
                    opacity: "0.7",
                    lineHeight: "1.8rem",
                  }}>
                  <span className="text-[45px] font-bold text-[#1d6400]">
                    {" "}
                    Our
                  </span>{" "}
                  Vision To be an international University recognized and noted
                  for innovation and self-reliance projecting culturally sound
                  and disciplined researchers and products who are committed to
                  learning for gainful engagement for the proper education of
                  the total man.
                </Typography>
              </Box>
            </Grid>
            <Grid item sm={12} md={4}>
              <Box className="px-3 py-10 border rounded-r-full bg-[#1d6400]">
                <Box className="flex items-center justify-center flex-col">
                  <img src={missionImg} alt="HUST vision" width="70px" />
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      color: "#fff",
                      marginTop: 3,
                      fontSize: "30px",
                    }}>
                    Our Goal
                  </Typography>
                </Box>
              </Box>
              <Box className="p-5 bg-[#f7f7f7] border rounded-md shadow-md mt-5">
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "16px",
                    opacity: "0.7",
                    lineHeight: "1.8rem",
                  }}>
                  <span className="text-[45px] font-bold text-[#5e0001]">
                    {" "}
                    The
                  </span>{" "}
                  Goal is to be an international University recognized and noted
                  for innovation and self-reliance projecting culturally sound
                  and disciplined researchers and products who are committed to
                  learning for gainful engagement for the proper education of
                  the total man.
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
